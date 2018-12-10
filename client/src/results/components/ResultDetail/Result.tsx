import * as React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { LogoSwitch } from '../../../common/components'
import _ from 'lodash'
import { IResult } from 'anymentionofit/results'

export const Result = (props: IResult) => <pre>{JSON.stringify(props.raw, null, 2)}</pre>
