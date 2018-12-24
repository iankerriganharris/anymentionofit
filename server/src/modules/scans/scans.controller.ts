import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Request,
  Response
} from '@nestjs/common'
import { MessageCodeError } from '../common/index'
import { CreateScanDto } from './CreateScan.dto'
import { ScansService } from './scans.service'

@Controller('scans')
export class ScansController {
  constructor(private readonly scansService: ScansService) {}

  @Post()
  @HttpCode(201)
  public async create(@Body() createScanDto: CreateScanDto) {
    const scan = await this.scansService.create(createScanDto)
    return scan
  }

  @Get(':id')
  public async one(@Param('id') id) {
    return this.scansService.findById(id)
  }
}
