import { Repository } from 'typeorm';
import { IFrequencyService } from './interfaces/IFrequencyService';
import { Frequency } from './frequency.entity';
import { CreateFrequencyDto } from './CreateFrequency.dto';
export declare class FrequenciesService implements IFrequencyService {
    private readonly frequenciesRepository;
    constructor(frequenciesRepository: Repository<Frequency>);
    findAll(options?: any): Promise<Array<Frequency>>;
    findById(id: number): Promise<Frequency | null>;
    create(Frequency: CreateFrequencyDto): Promise<Frequency>;
}
