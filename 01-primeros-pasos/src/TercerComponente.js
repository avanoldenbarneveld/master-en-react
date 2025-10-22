import React from 'react';
import PropTypes from "prop-types";

export const TercerComponente = ({
                                    nombre = "Víctor", 
                                    apellidos = "Robles", 
                                    ficha
                                }) => {

  return (
    <div>
        <h1>Comunicación entre componentes</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellidos}</li>
            <li>{ficha.grupo}</li>
            <li>{ficha.estado}</li>
        </ul>

    </div>
  )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    ficha: PropTypes.object
}

TercerComponente.defaultProps = {
    nombre: "Juan",
    apellidos: "Martínez"
}
