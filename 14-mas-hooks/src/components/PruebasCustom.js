import React, { useState } from 'react'
import { useMayus } from '../hooks/useMayus'

export const PruebasCustom = () => {

    const {estado, mayusculas, minusculas, concatenar} = useMayus('Alberto van WEB');
    
  return (
    <div>
        <h1>Probando componentes personalizados</h1>
        {estado}

        <button onClick={ mayusculas }>Poner en mayusculas</button>
        <button onClick={ minusculas }>Poner en minusculas</button>
        <button onClick={ e => concatenar(' - Probando Hooks Personalizados') }>Concatenar</button>
    </div>
  )
}
