import React, { useEffect } from 'react';

export const Listado = ({ listadoState, setListadoState }) => {
  useEffect(() => {
    console.log("Componentes del listado de peliculas cargado");
    let peliculas = JSON.parse(localStorage.getItem("pelis")) || [];
    setListadoState(peliculas);
  }, [setListadoState]);

  return (
    <>
      { listadoState && listadoState.length > 0 ? 
        listadoState.map(peli => (
          <article key={peli.id} className="peli-item">
            <h3 className="title">{peli.titulo}</h3>
            <p className="description">{peli.descripcion}</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </article>
        ))
        : <h2>No hay películas para mostrar</h2>
      }
    </>
  );
};
