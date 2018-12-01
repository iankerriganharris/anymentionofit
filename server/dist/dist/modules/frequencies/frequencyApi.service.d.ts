import { IFrequencyApiService } from './interfaces/IFrequencyApiService';
import { FrequencyApiRepository } from './abstracts/FrequencyApi.repository';
export declare class FrequencyApiService implements IFrequencyApiService {
    private readonly frequencyApiRepository;
    constructor(frequencyApiRepository: FrequencyApiRepository);
    search(query: any, options: any): Promise<object[]>;
}
