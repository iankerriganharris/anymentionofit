// import * as twitter from 'twitter'
import * as twitter from 'twit'
import { twitterConfig } from '../common'
import { IFrequencyClient } from './interfaces'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface ITwitterSearchResponse extends Omit<twitter.PromiseResponse, 'data'> {
  data: {
    statuses: Array<{
      text: string
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
    const objects = data.statuses.map(status => ({ text: status.text }))
    return objects
  }
}
