export interface IFrequencyClient {
  search(query: string, options?: object): Promise<object[]>
}
