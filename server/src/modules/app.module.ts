import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicsModule } from './topics/topics.module';
import { FrequenciesModule } from './frequencies/frequencies.module';
import { ScannersModule } from './scanners/scanners.module';
import { ScansModule } from './scans/scans.module';
import { 
  databaseConfig,
  winstonLogger } from './common';
import { Connection } from 'typeorm';
import { WinstonModule } from 'nest-winston';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...databaseConfig,
      type: 'postgres',
      entities: ['./**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TopicsModule,
    FrequenciesModule,
    ScannersModule,
    ScansModule,
    WinstonModule.forRoot(winstonLogger)
  ]
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}
