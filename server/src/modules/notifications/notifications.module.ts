import { Module } from '@nestjs/common'
import { BullModule } from 'nest-bull'
import { NotificationsController } from './notifications.controller'
import { NotificationsGateway } from './notifications.gateway'

@Module({
  controllers: [NotificationsController],
  imports: [
    BullModule.forRoot({
      name: 'notificationsQueue',
      options: {
        redis: {
          host: 'cache',
          port: 6379
        }
      },
      processors: []
    })
  ],
  providers: [NotificationsGateway]
})
export class NotificationsModule {}
