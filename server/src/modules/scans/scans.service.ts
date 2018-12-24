import { Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getConnection, In, Repository } from 'typeorm'
import { MessageCodeError } from '../common/lib/error/MessageCodeError'
import { FrequenciesService } from '../frequencies/frequencies.service'
import { ResultsService } from '../results/results.service'
import { ScannersService } from '../scanners/scanners.service'
import { TopicsService } from '../topics/topics.service'
import { CreateScanDto } from './CreateScan.dto'
import { IScanService } from './interfaces'
import { Scan } from './scan.entity'

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
    private readonly topicsService: TopicsService
  ) {}

  public async create(scan: CreateScanDto): Promise<Scan> {
    const scanner = await this.scannersService.findById(scan.scannerId)
    const createdScan = await this.scansRepository.create(scan)
    createdScan.scanner = scanner

    const topicResults = await Promise.all(
      await scanner.topics.map(async topic => {
        const frequencyResults = await Promise.all(
          scanner.frequencies.map(async frequency => {
            const hits = await frequency.client.search(topic.name)
            const result = await this.resultsService.create({ raw: hits })
            Promise.all([await this.topicsService.addResult(topic, result), await this.frequenciesService.addResult(frequency, result)])
            return result
          })
        )
        return frequencyResults
      })
    )

    const allResults = [].concat.apply([], topicResults)
    createdScan.results = allResults

    const saved = await this.scansRepository.save(createdScan)
    return saved
  }

  public async findById(id: number): Promise<Scan | null> {
    return this.scansRepository.findOne(id, {
      cache: true,
      relations: ['scanner', 'results', 'results.topic', 'results.frequency']
    })
  }
}
