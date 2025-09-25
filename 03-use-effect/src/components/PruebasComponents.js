import React, { useState, useEffect } from 'react'

export const PruebasComponents = () => {

    const [usuario, setUsuario] = useState("Víctor Robles")
    const [ fecha, setFecha ] = useState("01-0-1-1998");

    const  modUsuario = e => {
        setUsuario(e.target.value);
    };

    const cambiarFecha = e => {
        setFecha(new Date().toLocaleDateString());
    }

    useEffect(() => {
        console.log("Has cargado el componente PruebasComponent !!");
    }, []);

  return (
    <div>
        <h1> El efecto - Hook useEffect</h1>

        <strong className ='label'> {usuario} </strong>
        <strong> {fecha} </strong>

        <p>
                <input  type="text"
                onChange= { modUsuario } 
                placeholder="Cambia el nombre"
                />

                <button onClick={cambiarFecha}> Cambiar fecha </button>
        </p>
    </div>
  )
}
