


import { Injectable, Inject } from '@nestjs/common';
import { MessageCodeError } from '../common/lib/error/MessageCodeError';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In, getConnection } from 'typeorm';
import { Scan } from './scan.entity';
import { IScanService } from './interfaces';
import { CreateScanDto } from './CreateScan.dto';
import { FrequenciesService } from '../frequencies/frequencies.service';
import { ScannersService } from '../scanners/scanners.service';
import { ResultsService } from '../results/results.service';
import { TopicsService } from '../topics/topics.service';

@Injectable()
export class ScansService implements IScanService {
  constructor(
    @InjectRepository(Scan)
    private readonly scansRepository: Repository<Scan>,
    @Inject(FrequenciesService)
    private readonly frequenciesService: FrequenciesService,
    @Inject(ScannersService)
    private readonly scannersService: ScannersService,
    @Inject(ResultsService)
    private readonly resultsService: ResultsService,
    @Inject(TopicsService)
    private readonly topicsService: TopicsService,
  ) { }

  public async create(scan: CreateScanDto): Promise<Scan> {
    const scanner = await this.scannersService.findById(scan.scannerId);
    const createdScan = await this.scansRepository.create(scan);
    createdScan.scanner = scanner;

    const topicResults = await Promise.all(await scanner.topics.map( async topic => {
        const frequencyResults = await Promise.all(scanner.frequencies.map( async frequency => {
          const hits = await frequency.client.search(topic.name);
          const result = await this.resultsService.create({raw: hits});
          Promise.all([
            await this.topicsService.addResult(topic, result),
            await this.frequenciesService.addResult(frequency, result)
          ])
          return result;
        }))
        return frequencyResults;
      }
    ))

    const allResults = [].concat.apply([], topicResults)
    createdScan.results = allResults;

    const saved = await this.scansRepository.save(createdScan);
    return saved
  }

  public async findById(id: number): Promise<Scan | null> {
    return await this.scansRepository.findOne(id, { relations: ['scanner', 'results', 'results.topic', 'results.frequency'], cache: true});
  }

}
