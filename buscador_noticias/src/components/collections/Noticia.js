import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Noticia(props) {
  return (
    <>
      <img src={props.img}></img>
      <h1>{props.id}</h1>
      <h3>{props.titulo}</h3>
      <h6>{props.descripcion}</h6>
      <h6>{props.fuente.name}</h6>
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