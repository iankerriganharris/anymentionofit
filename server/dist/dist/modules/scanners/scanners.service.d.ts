import { Repository } from 'typeorm';
import { IScannerService } from './interfaces/IScannerService';
import { Scanner } from './scanner.entity';
import { CreateScannerDto } from './CreateScanner.dto';
import { FrequenciesService } from '../frequencies/frequencies.service';
export declare class ScannersService implements IScannerService {
    private readonly scannersRepository;
    private readonly frequenciesService;
    constructor(scannersRepository: Repository<Scanner>, frequenciesService: FrequenciesService);
    findAll(options?: any): Promise<Array<Scanner>>;
    findById(id: number): Promise<Scanner | null>;
    create(Scanner: CreateScannerDto): Promise<Scanner>;
}
