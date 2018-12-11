import { CacheModule, Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FrequenciesModule } from '../frequencies/frequencies.module'
import { ResultsModule } from '../results/results.module'
import { ScannersModule } from '../scanners/scanners.module'
import { Scan } from './scan.entity'
import { ScansController } from './scans.controller'
import { ScansService } from './scans.service'

@Module({
  controllers: [ScansController],
  imports: [TypeOrmModule.forFeature([Scan]), FrequenciesModule, ScannersModule, ResultsModule, CacheModule.register()],
  providers: [ScansService]
})
export class ScansModule {}
