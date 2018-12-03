
import { CreateTopicDto } from '../topics/CreaterTopic.dto'

export class CreateScannerDto {
  readonly name: string;
  readonly topics: Array<CreateTopicDto>;
  readonly filterFrequencies?: Array<number>;
}