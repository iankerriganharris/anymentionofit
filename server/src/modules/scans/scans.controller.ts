import { Controller, Get, Param, Post, Body, Put, Delete, HttpStatus, HttpCode, Request, Response } from '@nestjs/common';
import { MessageCodeError } from '../common/index';
import { ScansService } from './scans.service';
import { CreateScanDto } from './CreateScan.dto';

@Controller('scans')
export class ScansController {
    constructor(private readonly scansService: ScansService) { }

    @Post()
    @HttpCode(201)
    public async create(@Body() createScanDto: CreateScanDto) {
        const scan = await this.scansService.create(createScanDto);
        return scan
    }
}