import React from 'react'
import { BreadcrumbItem, Breadcrumb } from 'reactstrap'
import { Link } from 'react-router-dom'
import withBreadcrumbs from 'react-router-breadcrumbs-hoc'
import _ from 'lodash'
import ScannerBreadcrumb from './ScannerBreadcrumb'
import { ScanBreadcrumb } from '../../scans/containers'
import { ResultBreadcrumb } from '../../results/containers'

// define some custom breadcrumbs for certain routes (optional)
const routes = [
  { path: '/', breadcrumb: null },
  { path: '/scanners/:id/', breadcrumb: ScannerBreadcrumb },
  { path: '/scanners/:id/scans/', breadcrumb: null },
  { path: '/scanners/:id/scans/:id', breadcrumb: ScanBreadcrumb },
  { path: '/scanners/:id/scans/:id/results/', breadcrumb: null },
  { path: '/scanners/:id/scans/:id/results/:id', breadcrumb: ResultBreadcrumb }
]

// map & render your breadcrumb components however you want.
// each `breadcrumb` has the props `key`, `location`, and `match` included!
const Breadcrumbs = ({ breadcrumbs }: any) => (
  <Breadcrumb>
    {breadcrumbs.map((breadcrumb: any, index: any) => (
      <BreadcrumbItem key={breadcrumb.key} tag={Link} to={breadcrumb.props.match.url}>
        {breadcrumb}
      </BreadcrumbItem>
    ))}
  </Breadcrumb>
)

export default withBreadcrumbs(routes)(Breadcrumbs)
