import React, { useContext } from 'react'
import { PruebaContext } from './context/PruebaContexto'

export const Inicio = () => {

  const {usuario, setUsuario} = useContext(PruebaContext)


  return (
    <div>
      <h1>Inicio</h1>
      <p>Página de inicio</p>
      <p>Nombre: {usuario.nombre} {usuario.web}</p>
      {/* p>Valor compartido: <strong>{compartida.titulo}</strong></p> */}
    </div>
  )
}
