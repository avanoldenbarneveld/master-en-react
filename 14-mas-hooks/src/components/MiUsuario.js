import React, { useEffect, useState } from 'react';

export const MiUsuario = () => {
  const [usuario, setUsuario] = useState({
    datos: null,
    cargando: true
  });

  const getUsuario = async (url) => {
    setUsuario(prev => ({
      ...prev,
      cargando: true
    }));

    const peticion = await fetch(url, {
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    });

    const datos = await peticion.json();

    setUsuario({
      datos: datos.data,
      cargando: false
    });
  };

  const getId = (e) => {
    const id = parseInt(e.target.value);
    const url = `https://reqres.in/api/users/${id}`;
    getUsuario(url);
  };

  useEffect(() => {
    getUsuario('https://reqres.in/api/users/1');
  }, []);

  return (
    <div>
      <h1>Mi usuario:</h1>
      <p>Datos del usuario:</p>
      <p>{usuario.cargando ? 'Cargando...' : ''}</p>
      <p>{usuario?.datos?.first_name} {usuario?.datos?.last_name}</p>
      <input type="number" name="id" onChange={getId} />
    </div>
  );
};
