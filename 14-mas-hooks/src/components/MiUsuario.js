import React, { useState } from 'react'

export const MiUsuario = () => {

  const [usuario, setUsuario] = useState({
    datos: null
  });

  const getUsuario = async (url) => {
    const peticion = await fetch(url, {
      headers: {
        'x-api-key': 'reqres-free-v1' // ✅ include your API key
      }
    });

    const datos = await peticion.json();

    setUsuario({
      datos: datos.data // ✅ fix variable name
    });
  }

  const getId = e => {
    const id = parseInt(e.target.value);
    const url = `https://reqres.in/api/users/${id}`;
    getUsuario(url);
  }

  return (
    <div>
      <h1>Mi usuario:</h1>
      <p>Datos del usuario:</p>
      <p>{usuario?.datos?.first_name} {usuario?.datos?.last_name}</p>
      <input type="number" name="id" onChange={getId} />
    </div>
  )
}
