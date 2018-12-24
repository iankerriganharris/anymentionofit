import React from 'react'
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

export default () => (
  <Button color="primary" className="mb-2" tag={Link} to="new">
    New +
  </Button>
)
