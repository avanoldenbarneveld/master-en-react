import React, { useState, useEffect } from 'react';
import { Global } from '../../helpers/global';
import { Peticion } from '../../helpers/peticion';

export const Articulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const conseguirArticulos = async () => {
      try {
        const { datos } = await Peticion(Global.url + 'articulos', 'GET');

        if (datos.status === 'success') {
          setArticulos(datos.articulos);
        } else {
          setArticulos([]);
        }
      } catch (error) {
        console.error('Error al cargar artículos:', error);
        setArticulos([]);
      } finally {
        setCargando(false);
      }
    };

    conseguirArticulos();
  }, []);

  if (cargando) {
    return <h2>Cargando artículos...</h2>;
  }

  if (articulos.length === 0) {
    return <h1>No hay artículos</h1>;
  }

  return (
    <>
      {articulos.map((articulo) => (
        <article key={articulo._id} className="articulo-item">
          <div className="mascara">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/330px-Unofficial_JavaScript_logo_2.svg.png"
              alt={articulo.titulo}
            />
          </div>
          <div className="datos">
            <h3 className="title">{articulo.titulo}</h3>
            <p className="description">{articulo.contenido}</p>
            <button className="edit">Editar</button>
            <button className="delete">Borrar</button>
          </div>
        </article>
      ))}
    </>
  );
};
