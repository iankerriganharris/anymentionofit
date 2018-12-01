import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScannersController } from './scanners.controller';
import { ScannersService } from './scanners.service';
import { Scanner } from './scanner.entity';
import { FrequenciesModule } from '../frequencies/frequencies.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Scanner]),
        FrequenciesModule
    ],
    providers: [ScannersService],
    controllers: [ScannersController],
    exports: [ScannersService],
})
export class ScannersModule { }