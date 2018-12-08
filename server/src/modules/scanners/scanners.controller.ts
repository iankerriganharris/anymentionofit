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
} from '@nestjs/common';
import { MessageCodeError } from '../common/index';
import { ScannersService } from './scanners.service';
import { CreateScannerDto } from './CreateScanner.dto';

@Controller('scanners')
export class ScannersController {
    constructor(private readonly scannersService: ScannersService) { }

    @Post()
    @HttpCode(201)
    public async create(@Body() createScannerDto: CreateScannerDto) {
        const scanner = await this.scannersService.create(createScannerDto);
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