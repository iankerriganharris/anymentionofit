import {
  Body,
  Catch,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  Post,
  Put,
  Query,
  Request,
  Response
} from '@nestjs/common'
import { Logger, query } from 'winston'
import { MessageCodeError } from '../common/index'
import { CreateScannerDto } from './CreateScanner.dto'
import { ScannersService } from './scanners.service'

@Controller('scanners')
export class ScannersController {
  constructor(private readonly scannersService: ScannersService, @Inject('winston') private readonly logger: Logger) {}

  @Post()
  @HttpCode(201)
  public async create(@Body() createScannerDto: CreateScannerDto) {
    this.logger.info(JSON.stringify(createScannerDto))
    const scanner = await this.scannersService.create(createScannerDto)
    this.logger.info(JSON.stringify(scanner))
    return scanner
  }

  @Get()
  public async index(@Query() options, @Response() res) {
    const Scanners = await this.scannersService.findAll(options)
    return res.status(HttpStatus.OK).json(Scanners)
  }

  @Get(':id')
  public async one(@Param('id') id) {
    return this.scannersService.findById(id)
  }

  @Delete(':id')
  public async deleteOne(@Param('id') id) {
    return this.scannersService.deleteById(id)
  }
}
