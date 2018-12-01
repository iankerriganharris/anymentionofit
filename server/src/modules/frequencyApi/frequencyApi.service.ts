import { Injectable, Inject } from '@nestjs/common';
import { IFrequencyApiService } from './interfaces/IFrequencyApiService';
import { FrequencyApiRepository } from './abstracts/FrequencyApiRepository';

@Injectable()
export class FrequencyApiService implements IFrequencyApiService {
  constructor(
    @Inject(FrequencyApiRepository)
    private readonly frequencyApiRepository: FrequencyApiRepository
  ) { }
  
  public async search(query, options) {
    return await this.frequencyApiRepository.search(query, options);
  }

}