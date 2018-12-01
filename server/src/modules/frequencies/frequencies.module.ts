import { Module, CacheModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FrequenciesController } from './frequencies.controller';
import { FrequenciesService } from './frequencies.service';
import { Frequency } from './frequency.entity';
import { cacheConfig } from '../common';

@Module({
    imports: [
        TypeOrmModule.forFeature([Frequency]),
        CacheModule.register(cacheConfig)
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