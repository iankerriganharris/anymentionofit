import * as React from 'react'
import { IResult } from 'anymentionofit/results'

export const Result = (props: IResult) => <pre>{JSON.stringify(props.raw, null, 2)}</pre>
