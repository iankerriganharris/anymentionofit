import { FrequenciesService } from './frequencies.service';
export declare class FrequenciesController {
    private readonly frequenciesService;
    constructor(frequenciesService: FrequenciesService);
    index(res: any): Promise<any>;
}
