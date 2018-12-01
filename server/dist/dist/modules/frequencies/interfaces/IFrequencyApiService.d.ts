export interface IFrequencyApiService {
    search(query: string, options: object): Promise<Array<object>>;
}
