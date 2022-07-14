import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Container } from 'react-bootstrap'

function Header(props) {
  const [titulo, setTitulo] = useState('React Info 2022')

  useEffect(() => {
    setTitulo('otro titulo2 ')
  },[titulo])


  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">{titulo}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">
            <Link className="link" to="/">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="link" to="/about">
              About
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
