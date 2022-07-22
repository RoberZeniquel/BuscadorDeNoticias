import React, { Component, Fragment } from 'react'
import Buscador from '../components/Buscador'
import ListaNoticias from '../components/collections/ListaNoticias'

function Home(){

    return (
      <>
        <h1> Buscador de Noticias </h1>
        <Buscador></Buscador>
      </>
    )
  }

export default Home
