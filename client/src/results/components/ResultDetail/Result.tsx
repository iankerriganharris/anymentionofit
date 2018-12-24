import * as React from 'react'
import { IResult } from 'anymentionofit/results'
import { Table } from 'reactstrap'
import { IoMdLink } from 'react-icons/io'

export const Result = (props: IResult) => (
  <Table borderless hover>
    <thead>
      <tr>
        <th>Text</th>
        <th className="w-25">Link</th>
      </tr>
    </thead>
    <tbody>{renderResultItems(props.raw)}</tbody>
  </Table>
)

const renderResultItems = (items: IResult['raw']) =>
  items
    .sort((resultA: any, resultB: any) => (resultA.likes > resultB.likes ? -1 : resultA.likes < resultB.likes ? 1 : 0))
    .map((o: any, i: number) => (
      <tr key={i}>
        <td>{o.text}</td>
        <td>
          <a target="_blank" rel="noopener noreferrer" href={o.url}>
            <IoMdLink size="1.2em" />
          </a>
        </td>
      </tr>
    ))
