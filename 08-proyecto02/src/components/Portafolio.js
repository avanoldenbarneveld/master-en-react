import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>

      <section className='projects'>
      {
      trabajos.map(trabajo => (
        <article key={trabajo.id} className='project-item'>
          <div className='Mask'>
             <img src={"/images/"+trabajo.id+".jpg"} />
          </div>
          <span>{trabajo.categorias}</span>
          <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
          <h3>{trabajo.tecnologias}</h3>
        </article>
      ))}
      
      </section>

    </div>
  )
}
