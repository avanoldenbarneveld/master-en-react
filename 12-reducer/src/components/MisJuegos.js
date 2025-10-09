import React, { useEffect, useReducer } from 'react'
import { JuegoReducer } from '../reducers/JuegoReducer';

export const MisJuegos = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem("juegos")) || [];
    }
    const [juegos, dispatch] = useReducer(JuegoReducer, [{"hola":"hola"}], init)

    useEffect(() => {
        localStorage.setItem("juegos", JSON.stringify(juegos));
    }, [])

    const conseguirDatosForm = e => {
        e.preventDefault();

        let juego = {
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value
        };


        console.log(juego)
    }

  return (
    <div>
        <h1>Estos son mis videojuegos</h1>

        <p> Número de videojuegos: 15</p>
        <ul>
            <li>GTA</li>
            <li>Mortal Kombat</li>
            <li>Crash Bandicoot</li>
        </ul>


        <h3>Agregar Juego</h3>

        <form onSubmit={conseguirDatosForm}>
            <input type="text" name='titulo' placeholder='Titulo' />
            <textarea name='descripcion' placeholder='Descripción'></textarea>
            <input type='submit' value='Guardar' />
        </form>
    </div>
  )
}
