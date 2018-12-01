import { Repository } from 'typeorm';
import { ITopicService } from './interfaces/ITopicService';
import { Topic } from './topic.entity';
import { CreateTopicDto } from './CreaterTopic.dto';
import { ScannersService } from '../scanners/scanners.service';
export declare class TopicsService implements ITopicService {
    private readonly topicsRepository;
    private readonly scannersService;
    constructor(topicsRepository: Repository<Topic>, scannersService: ScannersService);
    findAll(options?: any): Promise<Array<Topic>>;
    findById(id: number): Promise<Topic | null>;
    create(topic: CreateTopicDto): Promise<Topic>;
}
