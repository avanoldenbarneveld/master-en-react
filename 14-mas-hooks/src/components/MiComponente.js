import React, { useId } from 'react'

export const MiComponente = () => {

const id = useId();
const segundo_id = useId();

console.log(id);
console.log(segundo_id);


  return (
    <div>
            <h1>Hook useID</h1>
            <input id={id} name='nombre' placeholder='Nombre' />
    </div>
  )
}
