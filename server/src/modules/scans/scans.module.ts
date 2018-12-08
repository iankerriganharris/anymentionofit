import { Module, CacheModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scan } from './scan.entity';
import { FrequenciesModule } from '../frequencies/frequencies.module';
import { ScansService } from './scans.service';
import { ScansController } from './scans.controller';
import { ScannersModule} from '../scanners/scanners.module';
import { ResultsModule } from '../results/results.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Scan]),
        FrequenciesModule,
        ScannersModule,
        ResultsModule,
        CacheModule.register(),
    ],
    providers: [ScansService],
    controllers: [ScansController]
})
export class ScansModule { }