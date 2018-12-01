import { IScanner } from './IScanner';
import { Scanner } from '../scanner.entity';

export interface IScannerService {
  findAll(): Promise<Array<Scanner>>;
  findById(id: number): Promise<Scanner | null>;
}