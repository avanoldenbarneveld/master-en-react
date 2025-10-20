import { useState } from 'react'
export const useMayus = (texto) => {

    const [miTexto, setMiTexto] = useState(texto)

    const mayusculas = () => {
       setMiTexto(texto.toUpperCase());

    }

    const minusculas = () => {
        setMiTexto(texto.toLowerCase());

    }

    const concatenar = (added) => {
        return texto+added;
    }

    return {
        estado: miTexto,
        mayusculas,
        minusculas,
        concatenar
    };

}