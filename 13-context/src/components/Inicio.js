import React, { useContext } from 'react'
import { PruebaContext } from './context/PruebaContexto'

export const Inicio = () => {

  const compartida = useContext(PruebaContext)

  console.log(compartida)

  return (
    <div>
      <h1>Inicio</h1>
      <p>Página de inicio</p>
      <p>Valor compartido: <strong>{compartida.titulo}</strong></p>
    </div>
  )
}
