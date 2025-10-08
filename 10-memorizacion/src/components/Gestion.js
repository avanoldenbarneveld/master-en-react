import React, { useCallback, useEffect, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

  const [ nombre, setNombre ] = useState("");
  const [pagina, setPagina ] = useState(1)

  useEffect(() => {
    console.log("La vista de Gestion se ha renderizado")
  })

  const asignarGestor = e => {
    setNombre(e.target.value);
  }

  useEffect(() => {
    console.log("Vista Gestion Actualizada")
  }, [nombre, pagina]);

  const mostrarMensaje = useCallback(() => {
    console.log("Hola que tal soy un mensaje desde el componente Empleados!!")
  }, [pagina]);

  return (
    <div>
        <h1> Nombre del gestor: {nombre} </h1>
        <input type="text" onChange={asignarGestor} placeholder="Introduce tu nombre de gestor" />

        <h2>Listado de empleados: </h2>
        <p> Los usuarios son gestionados por {nombre} vienen de jsonplaceholder...</p>
        <button onClick={() => {setPagina(1) }}>Página 1</button>
        <button onClick={() => {setPagina(2) }}>Página 2</button>

        <Empleados pagina={pagina} mensaje={mostrarMensaje}/>
    </div>
  )
}
