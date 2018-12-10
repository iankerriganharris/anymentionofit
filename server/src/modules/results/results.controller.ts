import { Controller, Get, Param, Post, Body, Put, Delete, HttpStatus, HttpCode, Request, Response } from '@nestjs/common';
import { MessageCodeError } from '../common/index';
import { ResultsService } from './results.service';
import { CreateResultDto } from './CreateResult.dto';

@Controller('results')
export class ResultsController {
    constructor(
        private readonly resultsService: ResultsService
    ) { }

    @Post()
    @HttpCode(201)
    public async create(@Body() createResultDto: CreateResultDto) {
        const result = await this.resultsService.create(createResultDto);
        return result
    }

    @Get(':id')
    public async one(@Param('id', ) id,) {
        return this.resultsService.findById(id)
    }
}