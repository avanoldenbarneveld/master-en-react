import React from 'react'
import { useMayus } from '../hooks/useMayus'

export const PruebasCustom = () => {

    const {mayusculas, minusculas, concatenar} = useMayus("albertovan.com");

    console.log(concatenar('hola'));
    
  return (
    <div>
        <h1>Probando componentes personalizados</h1>

    </div>
  )
}
