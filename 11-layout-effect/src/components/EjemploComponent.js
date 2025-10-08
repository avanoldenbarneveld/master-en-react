import React, { useEffect, useLayoutEffect, useState } from 'react'

export const EjemploComponent = () => {

    const [mostrar, setMostrar] = useState(false)

    useLayoutEffect(()=>{
        console.log("useLayoutEffect: Componente cargado !!!");
        let caja = document.querySelector("#caja");
        caja.innerHTML = "Hola";
        console.log(caja.getBoundingClientRect());
    }, [])

    useEffect(()=>{
        console.log("useEffect: Componente cargado !!!");
        let caja = document.querySelector("#caja");
        caja.innerHTML = "Hola 2";
        console.log(caja.getBoundingClientRect());
    }, [])

  return (
    <div>
        <h1>Ejemplo useEffect y useLayoutEffect</h1>


            {mostrar && (
            <div id='caja'> 
                Hola, soy un mensaje
            </div>
            )}
    </div>
  )
}
