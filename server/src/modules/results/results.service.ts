import { Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { In, Repository } from 'typeorm'
import { MessageCodeError } from '../common/lib/error/MessageCodeError'
import { CreateResultDto } from './CreateResult.dto'
import { IResultService } from './interfaces'
import { Result } from './result.entity'

@Injectable()
export class ResultsService implements IResultService {
  constructor(
    @InjectRepository(Result)
    private readonly resultsRepository: Repository<Result>
  ) {}

  public async create(result: CreateResultDto): Promise<Result> {
    const createdResult = await this.resultsRepository.create(result)
    const saved = await this.resultsRepository.save(createdResult)
    return saved
  }

  public async findById(id: number): Promise<Result | null> {
    return this.resultsRepository.findOne(id, { relations: ['scan', 'scan.scanner', 'frequency'], cache: true })
  }
}
