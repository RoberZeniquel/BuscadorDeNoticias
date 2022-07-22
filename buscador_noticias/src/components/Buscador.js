import { useEffect, useState } from 'react'
import { Spinner, Alert, Button } from 'react-bootstrap'
import ListaNoticias from './collections/ListaNoticias'
import axios from 'axios'

function Buscador(props) {
  const [loading, setLoading] = useState(false)
  const [contenido, setContenido] = useState('')
  const [busqueda, setBusqueda] = useState('')
  const [noticias, setNoticias] = useState([])
  const [error, setError] = useState(null)
  const [totalResultados, setTotalResultados] = useState(0)
  const [pagina, setPagina] = useState(1)


  useEffect( () =>{
    llamadaApi(busqueda, pagina)
  },[pagina]);

  useEffect( () =>{
    limpiarNoticias()
    llamadaApi(busqueda, pagina)
  },[busqueda]);


  const handleChange= (e) =>{
    setContenido(e.target.value);
  }

  const buscar = (e) =>{
    e.preventDefault()
    setBusqueda(contenido)
  }

  const llamadaApi = async(busqueda, pagina) => {
    setLoading(true)
    if (busqueda.length > 0) {
      await axios.get(`https://newsapi.org/v2/everything?q=${busqueda}&page=${pagina}&pageSize=10&language=es&apiKey=484d5a159489482aad49c70bf04cd8f3`)
      .then((response) => {
        setNoticias([...noticias, ...response.data.articles])
        setTotalResultados(response.data.totalResults)
        setLoading(false)
        return(response.data)
      })
      .catch((error) => {
        setError(error)
      })
    }
  }

  const cargarMas = (e) => {
    e.preventDefault()
    setPagina(pagina + 1)
  }

  const limpiarNoticias = () => {
    for(let i=noticias.length; i>0; i--) {
      noticias.pop()
    }
    return(noticias)
  }

  if (error) {
    return (
      <div className="py-5">
        <div className="container">
          <Alert>This is a {error}</Alert>
        </div>
      </div>
    )
  }

  return (
    <>
      <form onSubmit={buscar}>
        <input
          className="form-control inputBuscar"
          value={contenido}
          placeholder="Ingrese noticia a buscar"
          onChange={handleChange}
        />
        {contenido.length < 3 ? 
        <button type="submit" className="btn btn-success" disabled>Buscar</button>
        :
        <button type="submit" className="btn btn-success" >Buscar</button>
        }
      </form>

      {busqueda.length > 0 ? (
      <>
        {noticias.length > 0 ?
        <h5>Estas viendo {noticias.length} noticias de {totalResultados} resultados.</h5> :
        <></>
        }
      <ListaNoticias busqueda={busqueda}
                     noticias={noticias}
                     totalResultados={totalResultados}
      />
      <div>
        {loading ? (
            <Spinner animation="border" variant="success" />
            ) : (
            <Button variant="success" onClick={cargarMas}>
              Cargar mas +
            </Button>
        )}
      </div>
      </>) : (<></>)
      }
    </>
  )
}

export default Buscador