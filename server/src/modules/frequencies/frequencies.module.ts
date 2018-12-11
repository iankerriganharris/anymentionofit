import { CacheModule, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { cacheConfig } from '../common'
import { FrequenciesController } from './frequencies.controller'
import { FrequenciesService } from './frequencies.service'
import { Frequency } from './frequency.entity'

@Module({
  controllers: [FrequenciesController],
  exports: [FrequenciesService],
  imports: [TypeOrmModule.forFeature([Frequency]), CacheModule.register(cacheConfig)],
  providers: [FrequenciesService]
})
export class FrequenciesModule {}
