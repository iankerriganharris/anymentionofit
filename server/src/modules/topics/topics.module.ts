import { CacheModule, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { cacheConfig } from '../common'
import { ScannersModule } from '../scanners/scanners.module'
import { Topic } from './topic.entity'
import { TopicsController } from './topics.controller'
import { TopicsService } from './topics.service'

@Module({
  controllers: [TopicsController],
  exports: [TopicsService],
  imports: [
    TypeOrmModule.forFeature([Topic])
    // CacheModule.register(cacheConfig)
  ],
  providers: [TopicsService]
})
export class TopicsModule {}
