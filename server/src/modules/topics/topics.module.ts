import { Module, CacheModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicsController } from './topics.controller';
import { TopicsService } from './topics.service';
import { Topic } from './topic.entity';
import { ScannersModule } from '../scanners/scanners.module';
import { cacheConfig } from '../common';

@Module({
    imports: [
        TypeOrmModule.forFeature([Topic]),
        // CacheModule.register(cacheConfig)
    ],
    providers: [TopicsService],
    controllers: [TopicsController],
    exports: [TopicsService],
})
export class TopicsModule { }