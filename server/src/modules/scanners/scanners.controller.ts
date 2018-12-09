import { 
    Controller, 
    Get, 
    Param, 
    Post, 
    Body, 
    Put, 
    Delete, 
    HttpStatus, 
    HttpCode, 
    Request, 
    Response,
    Catch,
    Inject,
} from '@nestjs/common';
import { MessageCodeError } from '../common/index';
import { ScannersService } from './scanners.service';
import { CreateScannerDto } from './CreateScanner.dto';
import { Logger } from 'winston';

@Controller('scanners')
export class ScannersController {
    constructor(
        private readonly scannersService: ScannersService,
        @Inject('winston') private readonly logger: Logger,
    ) { }

    @Post()
    @HttpCode(201)
    public async create(@Body() createScannerDto: CreateScannerDto) {
        this.logger.info(JSON.stringify(createScannerDto));
        const scanner = await this.scannersService.create(createScannerDto);
        this.logger.info(JSON.stringify(scanner))
        return scanner
    }

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