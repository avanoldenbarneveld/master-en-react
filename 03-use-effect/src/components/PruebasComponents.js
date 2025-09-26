import React, { useState, useEffect } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponents = () => {

    const [usuario, setUsuario] = useState("Víctor Robles")
    const [ fecha, setFecha ] = useState("01-0-1-1998");
    const [ contador, setContador ] = useState(0);
    const  modUsuario = e => {
        setUsuario(e.target.value);
    };

    const cambiarFecha = e => {
        setFecha(new Date().toLocaleDateString());
    }

    useEffect(() => {
        console.log("Has cargado el componente PruebasComponent !!");
    }, []);

        useEffect(() => {
        console.log("Has modificado el usuario!!: " + contador);
        setContador(contador + 1)
    }, [fecha, usuario]);

  return (
    <div>
        <h1> El efecto - Hook useEffect</h1>

        <strong> {usuario} </strong>
        <strong className ={ contador >= 10 ? 'label label-green' : 'label'}> {fecha} </strong>

        <p>
                <input  type="text"
                onChange= { modUsuario } 
                placeholder="Cambia el nombre"
                />

                <button onClick={cambiarFecha}> Cambiar fecha </button>
        </p>



        { usuario === "VICTOR" && <AvisoComponent />}
    </div>
  )
}
