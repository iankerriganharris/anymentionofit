import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { WinstonModule } from 'nest-winston'
import { Connection } from 'typeorm'
import { databaseConfig, winstonLogger } from './common'
import { FrequenciesModule } from './frequencies/frequencies.module'
import { NotificationsModule } from './notifications/notifications.module'
import { ScannersModule } from './scanners/scanners.module'
import { ScansModule } from './scans/scans.module'
import { TopicsModule } from './topics/topics.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...databaseConfig,
      entities: ['./**/*.entity{.ts,.js}'],
      synchronize: true,
      type: 'postgres'
    }),
    TopicsModule,
    FrequenciesModule,
    ScannersModule,
    ScansModule,
    NotificationsModule,
    WinstonModule.forRoot(winstonLogger)
  ]
})
export class ApplicationModule {
  constructor(private readonly connection: Connection) {}
}
