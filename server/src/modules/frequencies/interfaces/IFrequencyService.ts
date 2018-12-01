import { Frequency } from '../frequency.entity';

export interface IFrequencyService {
  findAll(): Promise<Array<Frequency>>;
  findById(id: number): Promise<Frequency | null>;
}