import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Result } from './result.entity'
import { ResultsController } from './results.controller'
import { ResultsService } from './results.service'

@Module({
  controllers: [ResultsController],
  exports: [ResultsService],
  imports: [TypeOrmModule.forFeature([Result])],
  providers: [ResultsService]
})
export class ResultsModule {}
