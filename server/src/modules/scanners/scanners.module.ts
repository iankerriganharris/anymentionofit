import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScannersController } from './scanners.controller';
import { ScannersService } from './scanners.service';
import { Scanner } from './scanner.entity';
import { FrequenciesModule } from '../frequencies/frequencies.module';
import { TopicsModule } from '../topics/topics.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Scanner]),
        FrequenciesModule,
        TopicsModule,
    ],
    providers: [ScannersService],
    controllers: [ScannersController],
    exports: [ScannersService],
})
export class ScannersModule { }