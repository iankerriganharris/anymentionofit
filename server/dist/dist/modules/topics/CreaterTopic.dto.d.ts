export declare class CreateTopicDto {
    readonly name: string;
    readonly scannerOptions?: {
        readonly filterFrequencies?: Array<number>;
    };
}
