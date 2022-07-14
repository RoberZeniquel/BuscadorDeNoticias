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


  console.log('busqueda desde bucador: ' + busqueda)
  
  useEffect( () =>{
    console.log('busqueda desde buscador useEffect pagina: ' + busqueda)
    llamadaApi(busqueda, pagina)
  },[pagina]);

  
  useEffect( () =>{
    console.log('busqueda desde buscador useEffect busqueda: ' + busqueda)
    setNoticias([])
    llamadaApi(busqueda, pagina)
  },[busqueda]);


  const handleChange= (e) =>{
    setContenido(e.target.value);
  }

  const buscar = (e) =>{
    e.preventDefault()
    setBusqueda(contenido)
    console.log('buqueda desde buscador funcion buscar: ' + busqueda)
  }

  const llamadaApi = async(busqueda, pagina) => {
    setLoading(true)
    console.log('busqueda desde llamadaApi: ' + busqueda)
    if (busqueda.length > 0) {
      
      console.log('busqueda desde filtro llamadaApi: ' + busqueda)
      await axios.get(`https://newsapi.org/v2/everything?q=${busqueda}&page=${pagina}&pageSize=10&apiKey=484d5a159489482aad49c70bf04cd8f3`)
      .then((response) => {
        setNoticias([...noticias, ...response.data.articles])
        setTotalResultados(response.data.totalResults)
        setLoading(false)

        console.log('noticias desde llamadaApi: ')
        console.log(noticias)
        console.log('totalResultados desde llamadaApi: ')
        console.log(totalResultados)
        console.log('response desde llamadaApi: ')
        console.log(response)
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


  if (error) {
    return (
      <div className="py-5">
        <div className="container">
          <Alert>This is a {error}</Alert>
        </div>
      </div>
    )
  }


  console.log('noticias desde buscador: ')
  console.log(noticias)
  console.log('totalResultados desde buscador: ')
  console.log(totalResultados)

  return (
    <>
      <form onSubmit={buscar}>
        <input
          className="form-control inputBuscar"
          value={contenido}
          placeholder="Ingrese noticia a buscar"
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-success" >Buscar</button>
      </form>



      {busqueda.length > 0 ? (
      <>
      <h1>{busqueda}</h1>
      <h2>{totalResultados}</h2>
      <ListaNoticias busqueda={busqueda}
                     noticias={noticias}
                     totalResultados={totalResultados}
      />
      <div>
        {loading ? (
            <Button variant="success" disabled={true}>
              Cargando ...
            </Button>
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