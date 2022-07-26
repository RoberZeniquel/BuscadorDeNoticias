import { useEffect, useState } from 'react'
import Noticia from './Noticia'

function ListaNoticias(props) {
  const [noticias, setNoticias] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect( () =>{
    setNoticias(props.noticias)
    setLoading(props.loading)
  },[props.busqueda, props.noticias, props.totalResultados, props.loading]);

  return (
    <>
      <div >
        {(!noticias || noticias.length===0) && !loading ? 
        <h3>no hay noticias para mostrar</h3>
        : 
          noticias.map( (noticia, index) =>{
            return(
            <Noticia id={index}
                     titulo={noticia.title}
                     descripcion={noticia.description}
                     contenido={noticia.content}
                     fuente={noticia.source.name}
                     imagen={noticia.urlToImage}
                     fecha={noticia.publishedAt}
                     img={noticia.urlToImage}
                     url={noticia.url}
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