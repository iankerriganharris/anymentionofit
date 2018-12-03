import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Result } from './result.entity';
import { ResultsService } from './results.service';

@Module({
    imports: [
      TypeOrmModule.forFeature([Result]),
    ],
    providers: [
      ResultsService
    ],
    exports: [
      ResultsService
    ]
})
export class ResultsModule { }