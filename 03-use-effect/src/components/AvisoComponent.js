import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {

        // Cuando el componente se monta
        alert("El componente AvisoComponent está montado!!")

        // Cuando el component se desmonta
        return () => { 
            alert ("Componente desmontado!!")
        }

    }, []); // Se ejecuta una vez porque se pasa un array vacio

  return (
    <div> 

    <hr />
    <h3> Saludos Victor ¿Qué tal estás? </h3>
    <button onClick= {e => {
        alert("Bienvenido!")
    }}> Mostrar alerta </button>

    </div>
  )
}

