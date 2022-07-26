import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

function Footer(props) {
  return (
    <>
      <footer className="text-white py-4 bg-dark footer" height="100%">
      <Container>
        <Row >
          <Col className= 'text-center py-3' >Copyright &copy; 2022</Col>
        </Row>
      </Container>
      </footer>
    </>
  )
}

export default Footer
