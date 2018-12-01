import { Injectable, Inject } from '@nestjs/common';
import { MessageCodeError } from '../common/lib/error/MessageCodeError';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ITopicService } from './interfaces/ITopicService';
import { Topic } from './topic.entity';
import { ITopic } from './interfaces/ITopic';
import { CreateTopicDto } from './CreaterTopic.dto';
import { ScannersService } from '../scanners/scanners.service';
import { CreateScannerDto } from '../scanners/CreateScanner.dto';

@Injectable()
export class TopicsService implements ITopicService {
      constructor(
        @InjectRepository(Topic)
        private readonly topicsRepository: Repository<Topic>,
        @Inject(ScannersService)
        private readonly scannersService: ScannersService
      ) { }

    public async findAll(options?: any): Promise<Array<Topic>> {
        return await this.topicsRepository.find(options);
    }

    public async findById(id: number): Promise<Topic | null> {
        return await this.topicsRepository.findOne(id);
    }

    public async create(topic: CreateTopicDto): Promise<Topic> {
      const scanner: CreateScannerDto = {
        name: 'myScanner',
        ...topic.scannerOptions
      }
      const createdScanner = await this.scannersService.create(scanner)
      const createdTopic = await this.topicsRepository.create(topic)
      createdTopic.scanners = [createdScanner]
      const saved = await this.topicsRepository.save(createdTopic)
      return saved
  }
}