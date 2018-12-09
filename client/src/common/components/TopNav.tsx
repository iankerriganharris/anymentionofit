import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

interface IProps {
  brand: string
  links: {
    label: string
    destination: string
  }[]
}

export default (props: IProps) => (
  <div>
    <Navbar>
      <NavbarBrand tag={Link} to="/">
        {props.brand}
      </NavbarBrand>
      <Nav>{renderLinks(props.links)}</Nav>
    </Navbar>
  </div>
)

const renderLinks = (links: IProps['links']) =>
  links.map((link, i) => (
    <NavItem key={i}>
      <Link to={link.destination}>{link.label}</Link>
    </NavItem>
  ))
