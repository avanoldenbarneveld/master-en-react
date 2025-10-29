import React from 'react'
import { useState, useEffect } from 'react'

export const Articulos = () => {

  const [articulos, setArticulos] = useState([])

  useEffect(() => {
    let data = [
      {
        _id: 1,
        titulo: 'Titulo 1',
        contenido: 'Contenido'
      },
      {
        _id: 2,
        titulo: 'Titulo 1',
        contenido: 'Contenido'
      },
      {
        _id: 3,
        titulo: 'Titulo 1',
        contenido: 'Contenido'
      },
    ];

    setArticulos(data);
  }, [])

  return (
    <>
      {articulos.map(articulo => {
        return (
        <article key= {articulo._id} className="articulo-item">
          <div className='mascara'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/330px-Unofficial_JavaScript_logo_2.svg.png' />
          </div>
          <div className='datos'>
            <h3 className="title">{articulo.titulo}</h3>
            <p className="description">{articulo.contenido}</p>

            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </div>
        </article>
        );
      })}
    </>
  )
}
