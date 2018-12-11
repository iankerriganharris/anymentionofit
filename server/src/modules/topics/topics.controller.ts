import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Post, Put, Request, Response, UseInterceptors } from '@nestjs/common'
import { Logger } from 'winston'
import { MessageCodeError } from '../common/index'
import { CreateTopicDto } from './CreaterTopic.dto'
import { TopicsService } from './topics.service'

@Controller('topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService, @Inject('winston') private readonly logger: Logger) {}

  @Get()
  public async index(@Response() res) {
    const topics = await this.topicsService.findAll()
    this.logger.debug(JSON.stringify(topics))
    return res.status(HttpStatus.OK).json(topics)
  }

  @Post()
  @HttpCode(201)
  public async create(@Body() createTopicDto: CreateTopicDto) {
    const topic = await this.topicsService.create(createTopicDto)
    return topic
  }
}
