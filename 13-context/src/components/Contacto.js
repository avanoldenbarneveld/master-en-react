import React, { useContext } from 'react'
import { PruebaContext } from './context/PruebaContexto'

export const Contacto = () => {

  const curso = {
    id: 1,
    titulo: "Máster en TypeScript",
    contenido: "Muchas horas de contenido..."
  };

  const datoDesdeElContexto = useContext(PruebaContext);

  return (
    <div>
      <h1>Contacto</h1>
      <p>Página de contacto</p>
      <p>Valor compartido: <strong> {JSON.stringify(datoDesdeElContexto.contenido)} </strong></p>
    </div>
  )
}
