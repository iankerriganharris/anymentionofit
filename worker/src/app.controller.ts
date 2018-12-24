import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { Job, Queue } from 'bull'
import { InjectQueue } from 'nest-bull'

@Controller()
export class AppController {
  constructor(@InjectQueue('scannerPoll') readonly scannerPoll: Queue, @InjectQueue('scanQueue') readonly scanQueue: Queue) {}

  @Post('/queue')
  public async addJobToQueue(@Body() value: any) {
    const job: Job = await this.scanQueue.add(value)
    return job.id
  }

  @Post('/poll')
  public async addJob(@Body() value: any) {
    const job: Job = await this.scannerPoll.add(value, {
      delay: 100,
      repeat: {
        cron: '*/15 * * * * *'
      }
    })
    return job.id
  }

  @Get('/poll/:id')
  public async getJob(@Param('id') id: string) {
    return this.scannerPoll.getJob(id)
  }

  @Delete('/poll/:id')
  public async stopRepeat(@Param('id') id: string) {
    return this.scannerPoll.removeRepeatable({
      cron: '*/15 * * * * *'
    })
  }
}
