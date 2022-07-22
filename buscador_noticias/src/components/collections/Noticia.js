import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { DateTime } from "luxon";

function Noticia(props) {

  const parsearFecha = () => {
    const dt = DateTime.fromISO(props.fecha)
    const fecha = dt.toLocaleString(DateTime.DATE_SHORT)
    const horario = dt.toLocaleString(DateTime.TIME_SIMPLE)
    return ({'fecha':fecha, 'horario':horario})
  }

  return (
    <>
    <div>
    <Row xs={1} md={1} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        
        <Col>
          <Card>
          <a href={props.url} target="_blank" rel="noreferrer">
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
              <Card.Title>{props.titulo}</Card.Title>
              <Card.Text>{props.descripcion}</Card.Text>
              <Card.Text>{props.fuente}</Card.Text>
              <Card.Text>Publicado el {parsearFecha()['fecha']} a las {parsearFecha()['horario']} hs</Card.Text>
            </Card.Body>
          </a>  
          </Card>
        </Col>
        
      ))}
    </Row>
    </div>
      
    </>
  )
}

export default Noticia


/*
    Debe contener:
    1 - Nombre de plataforma de origen
    2 - Titulo noticia
    3 - Img de portada
    4 - Fecha de publicacion Ejemplo: Publicado el: 28-06-2022 a las 03:00 hs
    5 - Al hacer click en la noticia la misma se debe abrir una nueva pestaña
*/