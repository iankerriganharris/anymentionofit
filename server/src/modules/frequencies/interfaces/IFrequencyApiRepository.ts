

export interface IFrequencyClient {
  search(query: string, options?: object): Promise<Array<object>>;
}