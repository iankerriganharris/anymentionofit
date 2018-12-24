// import * as twitter from 'twitter'
import { Inject } from '@nestjs/common'
import * as twitter from 'twit'
import { Logger } from 'winston'
import { twitterConfig } from '../common'
import { IFrequencyClient } from './interfaces'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface ITwitterSearchResponse extends Omit<twitter.PromiseResponse, 'data'> {
  data: {
    statuses: Array<{
      text: string
      entities: {
        urls: Array<{
          url: string
        }>
      }
      retweet_count: number
      favorite_count: number
    }>
  }
}

export class Twitter implements IFrequencyClient {
  public client: twitter

  constructor() {
    this.client = new twitter(twitterConfig)
  }

  public async search(q) {
    const response = await this.client.get('search/tweets', {
      q,
      result_type: 'popular'
    })
    const { data } = response as ITwitterSearchResponse
    const objects = data.statuses.map(status => ({ text: status.text, url: status.entities.urls[0].url, likes: status.favorite_count }))
    return objects
  }
}
