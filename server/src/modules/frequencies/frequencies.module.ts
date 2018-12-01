import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FrequenciesController } from './frequencies.controller';
import { FrequenciesService } from './frequencies.service';
import { Frequency } from './frequency.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Frequency]),
    ],
    providers: [
        FrequenciesService
    ],
    controllers: [FrequenciesController],
    exports: [
        FrequenciesService
    ],
})
export class FrequenciesModule { }