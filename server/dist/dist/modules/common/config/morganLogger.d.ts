/// <reference types="node" />
import { Request, Response } from 'express';
export declare const morganLogger: {
    stderrOpts: {
        stream: NodeJS.WriteStream;
        skip: (req: Request, res: Response) => boolean;
    };
    stdoutOpts: {
        stream: NodeJS.WriteStream;
        skip: (req: Request, res: Response) => boolean;
    };
    format: string;
};
