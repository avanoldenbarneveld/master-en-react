import React, { useContext } from 'react'
import { PruebaContext } from './context/PruebaContexto'

export const Contacto = () => {

  const datoDesdeElContexto = useContext(PruebaContext);

  return (
    <div>
      <h1>Contacto</h1>
      <p>Página de contacto</p>
      Valor compartido: <pre> {JSON.stringify(datoDesdeElContexto.usuario)} </pre>
      {/* <p>Valor compartido: <strong> {JSON.stringify(datoDesdeElContexto.contenido)} </strong></p> */}
    </div>
  )
}
