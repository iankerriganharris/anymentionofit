import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FrequenciesModule } from '../frequencies/frequencies.module'
import { TopicsModule } from '../topics/topics.module'
import { Scanner } from './scanner.entity'
import { ScannersController } from './scanners.controller'
import { ScannersService } from './scanners.service'

@Module({
  controllers: [ScannersController],
  exports: [ScannersService],
  imports: [TypeOrmModule.forFeature([Scanner]), FrequenciesModule, TopicsModule],
  providers: [ScannersService]
})
export class ScannersModule {}
