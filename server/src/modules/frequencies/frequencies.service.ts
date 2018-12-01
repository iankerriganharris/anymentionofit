import { Injectable, Inject } from '@nestjs/common';
import { MessageCodeError } from '../common/lib/error/MessageCodeError';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IFrequencyService } from './interfaces';
import { Frequency } from './frequency.entity';
import { CreateFrequencyDto } from './CreateFrequency.dto';

@Injectable()
export class FrequenciesService implements IFrequencyService {
  constructor(
    @InjectRepository(Frequency)
    private readonly frequenciesRepository: Repository<Frequency>,
  ) { }

  public async findAll(options?: any): Promise<Array<Frequency>> {
    return await this.frequenciesRepository.find(options);
  }

  public async findById(id: number): Promise<Frequency | null> {
    return await this.frequenciesRepository.findOne(id);
  }

  public async create(Frequency: CreateFrequencyDto): Promise<Frequency> {
    const one = await this.frequenciesRepository.create(Frequency)
    const saved = await this.frequenciesRepository.save(one)
    return saved;
  }

  public async search(id: number, q: string): Promise<Array<object>> {
    const frequency = await this.frequenciesRepository.findOne(id);
    return frequency.client().search(q);
  }

}