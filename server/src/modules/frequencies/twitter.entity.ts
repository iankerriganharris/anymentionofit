import * as twitter from 'twitter'
import { twitterConfig } from '../common'
import { IFrequencyClient } from './interfaces'

export class Twitter implements IFrequencyClient {
  public client: twitter

  constructor() {
    this.client = new twitter(twitterConfig)
  }

  public async search(q) {
    return this.client.get('search/tweets', {
      q,
      result_type: 'popular'
    })
  }
}
