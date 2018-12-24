import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { NotificationDropdownContainer } from '../../notifications/containers'

interface IProps {
  brand: string
  links: {
    label: string
    destination: string
  }[]
}

export default (props: IProps) => (
  <Navbar>
    <Container>
      <NavbarBrand tag={Link} to="/">
        {props.brand}
      </NavbarBrand>
      <Nav>
        <NotificationDropdownContainer />
        {renderLinks(props.links)}
      </Nav>
    </Container>
  </Navbar>
)

const renderLinks = (links: IProps['links']) =>
  links.map((link, i) => (
    <NavItem key={i}>
      <Link to={link.destination}>{link.label}</Link>
    </NavItem>
  ))
