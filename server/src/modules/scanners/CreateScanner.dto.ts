import { CreateTopicDto } from '../topics/CreaterTopic.dto'

export class CreateScannerDto {
  public readonly name: string
  public readonly topics: CreateTopicDto[]
  public readonly filterFrequencies?: number[]
}
