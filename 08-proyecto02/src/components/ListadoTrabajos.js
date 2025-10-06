import React from 'react'
import { Link } from 'react-router-dom'
import { trabajos } from '../data/trabajos'

export const ListadoTrabajos = ({limite}) => {
  return (
 
      <section className='projects'>
      {
      trabajos.slice(0,limite).map(trabajo => (
        <article key={trabajo.id} className='project-item'>
          <div className='Mask'>
             <img src={"/images/"+trabajo.id+".jpg"} alt=''/>
          </div>
          <span>{trabajo.categorias}</span>
          <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
          <h3>{trabajo.tecnologias}</h3>
        </article>
      ))}
      
      </section>

  )
}
