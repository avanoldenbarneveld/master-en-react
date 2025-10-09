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

        const action = {
            type: "crear",
            payload: juego
        };

        dispatch(action);
        console.log(juegos);

    }

  return (
    <div>
        <h1>Estos son mis videojuegos</h1>

        <p> Número de videojuegos: {juegos.length}</p>
        <ul>
            {
                juegos.map(juego => {
                    <li key={juego.id}>
                        {juego.titulo}

                        <p>
                        &nbsp; <button> X</button>
                        </p>
                    </li>
                })
            }
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
