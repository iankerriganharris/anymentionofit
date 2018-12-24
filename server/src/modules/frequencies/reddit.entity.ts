import { Inject } from '@nestjs/common'
import * as snoowrap from 'snoowrap'
import { Logger } from 'winston'
import { redditConfig } from '../common'
import { IFrequencyClient } from './interfaces'

interface IRedditSearchResult {
  id: string
  ups: number
  url: string
  title: string
}

export class Reddit implements IFrequencyClient {
  public client: snoowrap

  constructor() {
    this.client = new snoowrap(redditConfig)
  }

  public async search(query, options) {
    const response: IRedditSearchResult[] = this.client.search({
      query,
      time: 'week',
      ...options
    })
    return response.map(result => ({ text: result.title, url: result.url, likes: result.ups }))
  }
}
