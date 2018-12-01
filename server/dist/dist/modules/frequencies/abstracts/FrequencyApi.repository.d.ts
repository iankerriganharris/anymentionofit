import * as snoowrap from 'snoowrap';
export declare abstract class FrequencyApiRepository {
    abstract client: snoowrap;
    abstract search(query: string, options: object): Promise<Array<object>>;
}
