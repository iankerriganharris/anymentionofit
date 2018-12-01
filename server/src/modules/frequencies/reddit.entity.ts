import { IFrequencyClient } from './interfaces';
import * as snoowrap from 'snoowrap';

export class Reddit implements IFrequencyClient {
  client: snoowrap;

  constructor() {
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
      time: 'week',
      ...options
    });
  }
}