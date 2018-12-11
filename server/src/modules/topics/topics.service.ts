import { Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getConnection, Repository } from 'typeorm'
import { MessageCodeError } from '../common/lib/error/MessageCodeError'
import { Result } from '../results/result.entity'
import { CreateScannerDto } from '../scanners/CreateScanner.dto'
import { ScannersService } from '../scanners/scanners.service'
import { CreateTopicDto } from './CreaterTopic.dto'
import { ITopic } from './interfaces/ITopic'
import { ITopicService } from './interfaces/ITopicService'
import { Topic } from './topic.entity'

@Injectable()
export class TopicsService implements ITopicService {
  constructor(
    @InjectRepository(Topic)
    private readonly topicsRepository: Repository<Topic>
  ) {}

  public async findAll(options?: any): Promise<Topic[]> {
    return this.topicsRepository.find(options)
  }

  public async findById(id: number): Promise<Topic | null> {
    return this.topicsRepository.findOne(id)
  }

  public async create(topic: CreateTopicDto): Promise<Topic> {
    // const scanner: CreateScannerDto = {
    //   name: 'myScanner',
    //   ...topic.scannerOptions
    // }
    // const createdScanner = await this.scannersService.create(scanner)
    const createdTopic = await this.topicsRepository.create(topic)
    // createdTopic.scanners = [createdScanner]
    const saved = await this.topicsRepository.save(createdTopic)
    return saved
  }

  public async addResult(topic: Topic, result: Result) {
    return getConnection()
      .createQueryBuilder()
      .relation(Topic, 'results')
      .of(topic)
      .add(result)
  }
}
