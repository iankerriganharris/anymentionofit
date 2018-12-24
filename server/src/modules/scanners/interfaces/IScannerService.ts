import { DeleteResult } from 'typeorm'
import { Scanner } from '../scanner.entity'

export interface IScannerService {
  findAll(): Promise<Scanner[]>
  findById(id: number): Promise<Scanner | null>
  deleteById(id: number): Promise<DeleteResult>
}
