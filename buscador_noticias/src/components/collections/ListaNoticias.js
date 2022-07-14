import { useEffect, useState } from 'react'
import { Card, Spinner, Alert, Button } from 'react-bootstrap'
import Noticia from './Noticia'

function ListaNoticias(props) {
  const [busqueda, setBusqueda] = useState('')
  const [noticias, setNoticias] = useState([])
  const [totalResultados, setTotalResultados] = useState(0)



  useEffect( () =>{
    setBusqueda(props.busqueda)
    setNoticias(props.noticias)
    setTotalResultados(props.totalResultados)   
  },[props.busqueda, props.noticias, props.totalResultados]);

  console.log('busqueda desde ListaNoticias')
  console.log(busqueda)
  console.log('noticias desde ListaNoticias')
  console.log(noticias)
  console.log('totalResultados desde ListaNoticias')
  console.log(totalResultados)

  return (
    <>
      <div >
        {!noticias || noticias.length === 0 ? 
        <p>no hay noticias para mostrar</p>
        : noticias.map( (noticia, index) =>{
            return(
            <Noticia id={index}
                     titulo={noticia.title}
                     descripcion={noticia.description}
                     contenido={noticia.content}
                     fuente={noticia.source.name}
                     imagen={noticia.urlToImage}
                     fecha={noticia.publishedAt}
                     img={noticia.urlToImage}
                     />        
        )})}
      </div>
    </>
  )
}

export default ListaNoticias


/*
    Debe contener:
    1 - Mostrar la leyenda: Está viendo 10 noticias de {totalResults} resultados
    2 - Paginación, donde se presenten 10 noticias por vez
    3 - [OPCIONAL] Se puede optar por un ‘Infinite Scroll’
    4 - Fecha de publicacion Ejemplo: Publicado el: 28-06-2022 a las 03:00 hs
    5 - Al hacer click en la noticia la misma se debe abrir una nueva pestaña
*/