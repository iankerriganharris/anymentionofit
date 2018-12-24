import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { Job, Queue } from 'bull'
import { InjectQueue } from 'nest-bull'
import { CreateNotificationDto } from './CreateNotification.dto'

@Controller('/notifications')
export class NotificationsController {
  constructor(@InjectQueue('notificationsQueue') readonly queue: Queue) {}

  @Post()
  public async addJob(@Body() createNotificationDto: CreateNotificationDto) {
    const job: Job = await this.queue.add(createNotificationDto)
    return job.id
  }

  @Get(':id')
  public async getJob(@Param('id') id: string) {
    return this.queue.getJob(id)
  }
}
