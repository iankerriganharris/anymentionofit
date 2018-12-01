import * as snoowrap from 'snoowrap';
import { FrequencyApiRepository } from "./abstracts/FrequencyApiRepository";

export class RedditApi extends FrequencyApiRepository {
  client: snoowrap;

  constructor() {
    super();
    this.client = new snoowrap({
      userAgent: 'test /u/anymentionofit',
      clientId: 'ozj7OWQR5YX12g',
      clientSecret: 'sgkPFG3qqxvQFNy3ASmaVzoELxw',
      refreshToken: '73704986269-QVI0ZwiuVfVLYAKZMhZneOzpuVo'
    })
  }

  public async search(query, options) {
    return await this.client.search({
      query: query,
      sort: options.sort,
      time: 'week',
    });
  }

}