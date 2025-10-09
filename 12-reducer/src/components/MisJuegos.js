import React, { useEffect, useReducer } from 'react'
import { JuegoReducer } from '../reducers/JuegoReducer';

export const MisJuegos = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem("juegos")) || [];
    }

    const [juegos, dispatch] = useReducer(JuegoReducer, [], init);

    useEffect(() => {
        localStorage.setItem("juegos", JSON.stringify(juegos));
    }, [juegos]);

    const conseguirDatosForm = e => {
        e.preventDefault();

        let juego = {
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value
        };

        const action = {
            type: "crear",
            payload: juego
        };

        dispatch(action);
    }

    const editar = (e, id) => {
        console.log(e.target.value, "editar", id)

        let juego = {
            id,
            titulo: e.target.value,
            descripcion: e.target.value
        };
    }

    const borramelo = id => {
        const action = {
            type: "borrar",
            payload: id
        }
        dispatch(action);
    }

    return (
        <div>
            <h1> Estos son mis videojuegos </h1>

            <p> Número de videojuegos: {juegos.length}</p>
            <ul>
                {juegos.map(juego => (
                    <li key={juego.id}>
                        {juego.titulo}
                        &nbsp; <button onClick={() => borramelo(juego.id)}> X </button>
                        <input type='text' onBlur={e => editar(e, juego.id)}
                                           onKeyDown={ e => {
                                            if (e.key == "Enter"){
                                                editar(e, juego.id)}
                                                console.log("Has presionado enter")
                                            }
                                        }
                        />
                    </li>
                ))}
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