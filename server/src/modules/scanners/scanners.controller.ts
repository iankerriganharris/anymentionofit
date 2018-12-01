import { Controller, Get, Param, Post, Body, Put, Delete, HttpStatus, HttpCode, Request, Response } from '@nestjs/common';
import { MessageCodeError } from '../common/index';
import { ScannersService } from './scanners.service';
import { CreateScannerDto } from './CreateScanner.dto';

@Controller('scanners')
export class ScannersController {
    constructor(private readonly scannersService: ScannersService) { }

    @Get()
    public async index(@Response() res) {
        const Scanners = await this.scannersService.findAll();
        return res.status(HttpStatus.OK).json(Scanners);
    }

    @Get(':id')
    public async one(@Param('id', ) id,) {
        return this.scannersService.findById(id)
    }
}