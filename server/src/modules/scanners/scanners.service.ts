import { Injectable, Inject } from '@nestjs/common';
import { MessageCodeError } from '../common/lib/error/MessageCodeError';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { IScannerService } from './interfaces/IScannerService';
import { Scanner } from './scanner.entity';
import { CreateScannerDto } from './CreateScanner.dto';
import { FrequenciesService } from '../frequencies/frequencies.service';
import { TopicsService } from '../topics/topics.service';

@Injectable()
export class ScannersService implements IScannerService {
  constructor(
    @InjectRepository(Scanner)
    private readonly scannersRepository: Repository<Scanner>,
    @Inject(FrequenciesService)
    private readonly frequenciesService: FrequenciesService,
    @Inject(TopicsService)
    private readonly topicsService: TopicsService
  ) { }

  public async create(Scanner: CreateScannerDto): Promise<Scanner> {
    const frequenciesToScan = Scanner.filterFrequencies && Scanner.filterFrequencies.length ? 
      await this.frequenciesService.findAll({
        id: In(Scanner.filterFrequencies)
      }) : await this.frequenciesService.findAll();
    const createdScanner = await this.scannersRepository.create(Scanner);
    const createdTopics = await Promise.all(Scanner.topics.map( topic => this.topicsService.create(topic) ))
    createdScanner.frequencies = frequenciesToScan;
    createdScanner.topics = createdTopics
    const saved: Scanner = await this.scannersRepository.save(createdScanner)
    return saved
  }

  public async findAll(options?: any): Promise<Array<Scanner>> {
    return await this.scannersRepository.find({...options, cache: true});
  }

  public async findById(id: number): Promise<Scanner | null> {
    return await this.scannersRepository.findOne(id, { relations: ['topics', 'scans'], cache: true});
  }

}