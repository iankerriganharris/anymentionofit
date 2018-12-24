import { Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DeleteResult, In, Repository } from 'typeorm'
import { Logger } from 'winston'
import { FrequenciesService } from '../frequencies/frequencies.service'
import { TopicsService } from '../topics/topics.service'
import { CreateScannerDto } from './CreateScanner.dto'
import { IScannerService } from './interfaces/IScannerService'
import { Scanner } from './scanner.entity'

@Injectable()
export class ScannersService implements IScannerService {
  constructor(
    @InjectRepository(Scanner)
    private readonly scannersRepository: Repository<Scanner>,
    @Inject(FrequenciesService)
    private readonly frequenciesService: FrequenciesService,
    @Inject(TopicsService)
    private readonly topicsService: TopicsService,
    @Inject('winston') private readonly logger: Logger
  ) {}

  public async create(Scanner: CreateScannerDto): Promise<Scanner> {
    const frequenciesToScan =
      Scanner.filterFrequencies && Scanner.filterFrequencies.length
        ? await this.frequenciesService.findAll({
            id: In(Scanner.filterFrequencies)
          })
        : await this.frequenciesService.findAll()
    const createdScanner = await this.scannersRepository.create(Scanner)
    const createdTopics = await Promise.all(Scanner.topics.map(topic => this.topicsService.create(topic)))
    createdScanner.frequencies = frequenciesToScan
    createdScanner.topics = createdTopics
    const saved: Scanner = await this.scannersRepository.save(createdScanner)
    return saved
  }

  public async findAll(options?: any): Promise<Scanner[]> {
    return options.limitTo === 'ids'
      ? this.scannersRepository
          .createQueryBuilder('scanner')
          .select(['scanner.id'])
          .cache(true)
          .getMany()
      : this.scannersRepository.find({
          cache: true,
          order: { id: 'DESC' },
          relations: ['frequencies']
        })
  }

  public async findById(id: number): Promise<Scanner | null> {
    return this.scannersRepository
      .createQueryBuilder('scanner')
      .leftJoinAndSelect('scanner.frequencies', 'frequencies')
      .leftJoinAndSelect('scanner.topics', 'topics')
      .leftJoinAndSelect('scanner.scans', 'scans')
      .where(`scanner.id = ${id}`)
      .orderBy('scans.id', 'DESC')
      .cache(true)
      .getOne()
  }

  public async deleteById(id: number): Promise<DeleteResult> {
    return this.scannersRepository
      .createQueryBuilder()
      .delete()
      .from(Scanner)
      .where(`id = ${id}`)
      .execute()
  }
}
