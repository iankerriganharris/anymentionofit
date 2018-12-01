import { ScannersService } from './scanners.service';
export declare class ScannersController {
    private readonly scannersService;
    constructor(scannersService: ScannersService);
    index(res: any): Promise<any>;
    one(id: any): Promise<import("./scanner.entity").Scanner>;
}
