import { Controller, Param, Get, Post, Body, Put, Delete, HttpStatus, HttpCode, Request, Response } from '@nestjs/common';
import { MessageCodeError } from '../common/index';
import { FrequenciesService } from './frequencies.service';


@Controller('frequencies')
export class FrequenciesController {
    constructor(private readonly frequenciesService: FrequenciesService) { }

    @Get()
    public async index(@Response() res) {
        const Frequencies = await this.frequenciesService.findAll();
        return res.status(HttpStatus.OK).json(Frequencies);
    }

    @Get(':id')
    public async one(@Param('id', ) id,) {
        return this.frequenciesService.getApi(id)
    }
}