import { IFrequencyClient } from './interfaces';
import * as twitter from 'twitter';
import { twitterConfig } from '../common';

export class Twitter implements IFrequencyClient {
  client: twitter;

  constructor() {
    this.client = new twitter(twitterConfig)
  }

  public async search(q) {
    return await this.client.get('search/tweets', {
      q,
      result_type: 'popular'
    });
  }
}