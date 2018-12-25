import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { Job, Queue } from 'bull'
import { InjectQueue } from 'nest-bull'

@Controller()
export class AppController {
  constructor(
    @InjectQueue('scannerPoll') readonly scannerPoll: Queue,
    @InjectQueue('scanQueue') readonly scanQueue: Queue
  ) {}

  public async onModuleInit() {
    await this.scannerPoll.add(
      {},
      {
        delay: 100,
        repeat: {
          cron: '* */15 * * * *'
        }
      }
    )
  }

  @Post('/queue')
  public async addJobToQueue(@Body() value: any) {
    const job: Job = await this.scanQueue.add(value)
    return job.id
  }

  @Delete('/poll')
  public async stopRepeat() {
    return this.scannerPoll.removeRepeatable({
      cron: '* */15 * * * *'
    })
  }
}
