import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

function Header(props) {

  return (
    <Navbar className="header" bg="dark" variant="dark" expand='lg'>
      <Container>
        <Navbar.Brand href="/buscador">Buscador de noticas</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header
