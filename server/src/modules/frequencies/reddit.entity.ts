import { IFrequencyClient } from './interfaces';
import * as snoowrap from 'snoowrap';
import { redditConfig } from '../common';

export class Reddit implements IFrequencyClient {
  client: snoowrap;

  constructor() {
    this.client = new snoowrap(redditConfig)
  }

  public async search(query, options) {
    return await this.client.search({
      query: query,
      time: 'week',
      ...options
    });
  }
}