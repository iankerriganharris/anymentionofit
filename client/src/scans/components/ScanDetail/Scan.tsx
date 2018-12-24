import * as React from 'react'
import { IScan } from 'anymentionofit/scans'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { LogoSwitch } from '../../../common/components'
import _ from 'lodash'
import { Link } from 'react-router-dom'

export const Scan = (props: IScan) => (
  <div>
    <ListGroup>{props.results ? renderResults(props.results) : null}</ListGroup>
  </div>
)

const renderResults = (results: IScan['results']) =>
  results
    .sort((resultA, resultB) =>
      resultA.frequency.name < resultB.frequency.name
        ? -1
        : resultA.frequency.name > resultB.frequency.name
        ? 1
        : 0
    )
    .sort((resultA, resultB) =>
      resultA.topic.name < resultB.topic.name
        ? -1
        : resultA.topic.name > resultB.topic.name
        ? 1
        : 0
    )
    .map((result, i) => (
      <ListGroupItem key={i}>
        <ResultItem {...result} />
      </ListGroupItem>
    ))

const ResultItem: React.FunctionComponent<IScan['results'][0]> = (
  props: IScan['results'][0]
) => (
  <div>
    <LogoSwitch company={props.frequency.name} />
    &nbsp;
    <Link to={`results/${props.id}`}>{props.topic.name}</Link>
  </div>
)
