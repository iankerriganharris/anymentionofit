import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default () => (
  <Button tag={Link} to="new">
    New +
  </Button>
)
