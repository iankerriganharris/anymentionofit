import { Inject, Injectable, OnModuleInit } from '@nestjs/common'
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse
} from '@nestjs/websockets'
import { DoneCallback, Job, Queue } from 'bull'
import { InjectQueue } from 'nest-bull'
import { Logger } from 'winston'

@Injectable()
@WebSocketGateway()
export class NotificationsGateway implements OnModuleInit {
  @WebSocketServer() private server

  constructor(
    @InjectQueue('notificationsQueue') private readonly queue: Queue,
    @Inject('winston') private readonly logger: Logger
  ) {}

  public onModuleInit() {
    this.queue.process((job: Job, done: DoneCallback) => {
      this.logger.info(job.data)
      this.server.emit('newNotification', job.data)
      done(null, job.data)
    })
  }
}
