import {
  Body,
  CacheInterceptor,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Request,
  Response,
  UseInterceptors
} from '@nestjs/common'
import { MessageCodeError } from '../common/index'
import { FrequenciesService } from './frequencies.service'

@Controller('frequencies')
export class FrequenciesController {
  constructor(private readonly frequenciesService: FrequenciesService) {}

  @Get()
  public async index(@Response() res) {
    const Frequencies = await this.frequenciesService.findAll()
    return res.status(HttpStatus.OK).json(Frequencies)
  }

  @Get(':id')
  public async one(@Param('id') id) {
    return this.frequenciesService.findById(id)
  }

  // @Get(':id/search')
  // @UseInterceptors(CacheInterceptor)
  // public async search(
  //     @Param('id',) id, @Query('q',) q) {
  //     return this.frequenciesService.search(id, q)
  // }
}
