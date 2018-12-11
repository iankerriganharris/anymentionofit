import * as snoowrap from 'snoowrap'
import { redditConfig } from '../common'
import { IFrequencyClient } from './interfaces'

export class Reddit implements IFrequencyClient {
  public client: snoowrap

  constructor() {
    this.client = new snoowrap(redditConfig)
  }

  public async search(query, options) {
    return this.client.search({
      query,
      time: 'week',
      ...options
    })
  }
}
