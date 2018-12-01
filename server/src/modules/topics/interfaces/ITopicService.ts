import { ITopic } from './ITopic';
import { Topic } from '../topic.entity';

export interface ITopicService {
  findAll(): Promise<Array<Topic>>;
  findById(id: number): Promise<Topic | null>;
}