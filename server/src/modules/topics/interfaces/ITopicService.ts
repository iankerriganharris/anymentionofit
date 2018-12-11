import { Topic } from '../topic.entity'
import { ITopic } from './ITopic'

export interface ITopicService {
  findAll(): Promise<Topic[]>
  findById(id: number): Promise<Topic | null>
}
