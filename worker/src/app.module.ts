import { Module } from '@nestjs/common'
import { BullModule } from 'nest-bull'
import { AppController } from './app.controller'
import { scannerProcessor, scanProcessor } from './processors'

@Module({
  controllers: [AppController],
  imports: [
    BullModule.forRoot({
      name: 'scannerPoll',
      options: {
        redis: {
          host: 'cache',
          port: 6379
        }
      },
      processors: [scannerProcessor]
    }),
    BullModule.forRoot({
      name: 'scanQueue',
      options: {
        redis: {
          host: 'cache',
          port: 6379
        }
      },
      processors: [scanProcessor]
    })
  ]
})
export class ApplicationModule {}
