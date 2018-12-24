interface ISearchResult {
  text: string
  url: string
  likes: number
}

export interface IFrequencyClient {
  search(query: string, options?: object): Promise<ISearchResult[]>
}
