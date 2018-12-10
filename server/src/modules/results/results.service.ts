import { Injectable, Inject } from '@nestjs/common';
import { MessageCodeError } from '../common/lib/error/MessageCodeError';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Result } from './result.entity';
import { IResultService } from './interfaces';
import { CreateResultDto } from './CreateResult.dto';

@Injectable()
export class ResultsService implements IResultService {
  constructor(
    @InjectRepository(Result)
    private readonly resultsRepository: Repository<Result>,
  ) { }

  public async create(result: CreateResultDto): Promise<Result> {
    const createdResult = await this.resultsRepository.create(result)
    const saved = await this.resultsRepository.save(createdResult)
    return saved
  }

  public async findById(id: number): Promise<Result | null> {
    return await this.resultsRepository.findOne(id, { relations: ['scan', 'scan.scanner', 'frequency'], cache: true});
  }

}
