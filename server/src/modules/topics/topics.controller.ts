import { Controller, Inject, Get, Post, Body, Put, Delete, HttpStatus, HttpCode, Request, Response } from '@nestjs/common';
import { MessageCodeError } from '../common/index';
import { TopicsService } from './topics.service';
import { CreateTopicDto } from './CreaterTopic.dto';
import { Logger } from 'winston';

@Controller()
export class TopicsController {
    constructor(
        private readonly topicsService: TopicsService,
        @Inject('winston') private readonly logger: Logger
    ) { }

    @Get('Topics')
    public async index(@Response() res) {
        const topics = await this.topicsService.findAll();
        return res.status(HttpStatus.OK).json(topics);
    }

    @Post('Topics')
    @HttpCode(201)
    public async create(@Body() createTopicDto: CreateTopicDto) {
        const topic = await this.topicsService.create(createTopicDto);
        return topic
    }
}