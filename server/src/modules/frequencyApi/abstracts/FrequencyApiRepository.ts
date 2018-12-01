import * as snoowrap from 'snoowrap';

export abstract class FrequencyApiRepository {
  abstract client: snoowrap;
  abstract search(query: string, options: object): Promise<Array<object>>;
}