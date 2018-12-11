import { Frequency } from '../frequency.entity'

export interface IFrequencyService {
  findAll(): Promise<Frequency[]>
  findById(id: number): Promise<Frequency | null>
}
