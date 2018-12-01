import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicsController } from './topics.controller';
import { TopicsService } from './topics.service';
import { Topic } from './topic.entity';
import { ScannersModule } from '../scanners/scanners.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Topic]),
        ScannersModule
    ],
    providers: [TopicsService],
    controllers: [TopicsController],
})
export class TopicsModule { }