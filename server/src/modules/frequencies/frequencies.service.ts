import { Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { getConnection, Repository } from 'typeorm'
import { MessageCodeError } from '../common/lib/error/MessageCodeError'
import { Result } from '../results/result.entity'
import { CreateFrequencyDto } from './CreateFrequency.dto'
import { Frequency } from './frequency.entity'
import { IFrequencyService } from './interfaces'

@Injectable()
export class FrequenciesService implements IFrequencyService {
  constructor(
    @InjectRepository(Frequency)
    private readonly frequenciesRepository: Repository<Frequency>
  ) {}

  public async findAll(options?: any): Promise<Frequency[]> {
    return this.frequenciesRepository.find(options)
  }

  public async findById(id: number): Promise<Frequency | null> {
    return this.frequenciesRepository.findOne(id)
  }

  public async create(Frequency: CreateFrequencyDto): Promise<Frequency> {
    const one = await this.frequenciesRepository.create(Frequency)
    const saved = await this.frequenciesRepository.save(one)
    return saved
  }

  public async addResult(frequency: Frequency, result: Result) {
    return getConnection()
      .createQueryBuilder()
      .relation(Frequency, 'results')
      .of(frequency)
      .add(result)
  }
}
