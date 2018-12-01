import * as snoowrap from 'snoowrap';
import { FrequencyApiRepository } from "./abstracts/FrequencyApi.repository";
export declare class RedditApi extends FrequencyApiRepository {
    client: snoowrap;
    constructor();
    search(query: any, options: any): Promise<snoowrap.Listing<snoowrap.Submission>>;
}
