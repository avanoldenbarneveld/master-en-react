import React, {useState} from 'react'

export const MiPrimerEstado = () => {

    /* let nombre = "Victor Robles";

    const cambiarNombre = e => {
        nombre = "Paquito Fernandez"
    }
      */

    const [ nombre, setNombre ] = useState("Víctor Robles");

    const cambiarNombre = (e, nombreFijo) => {
        setNombre (nombreFijo);
    }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong>
                {nombre}
        </strong>
        &nbsp;
        <button onClick={ e => cambiarNombre(e, "Francisco") }>Cambiar nombre por Fran</button>

        &nbsp;
        <input type="text" onKeyUp={ e => cambiarNombre(e, e.target.value )} placeholder='Cambia el nombre' />

    </div>
  )
}
