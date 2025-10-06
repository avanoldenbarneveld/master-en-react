import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>

        <h1>
          Hola, soy Alberto van Oldenbarneveld y soy Desarrollador Web en Pamplona,
          y ofrezco mis servicios de <strong>programación y desarrollo</strong> en
          todo tipo de proyectos web.
        </h1>

        <h2>
          Te ayudo a crear tu sitio o aplicación web, tener más
          visibilidad y relevancia en internet. <Link to='/contacto'> Contacta conmigo.</Link>
        </h2>

        <section className='latest-projects'>
          <h2 className='headings'>Algunos de mis proyectos</h2>
          <p> Estos son algunos de mis trabajos de desarrollo web.</p>

        <ListadoTrabajos />

        </section>
    </div>
  
  )
}
