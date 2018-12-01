import { TopicsService } from './topics.service';
import { CreateTopicDto } from './CreaterTopic.dto';
import { Logger } from 'winston';
export declare class TopicsController {
    private readonly topicsService;
    private readonly logger;
    constructor(topicsService: TopicsService, logger: Logger);
    index(res: any): Promise<any>;
    create(createTopicDto: CreateTopicDto): Promise<import("./topic.entity").Topic>;
}
