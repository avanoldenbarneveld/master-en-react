import React from 'react'

export const MiComponente = () => {

const id = new Date().getTime();

  return (
    <div>
            <h1>Hook useID</h1>
            <input id={id} name='nombre' placeholder='Nombre' />
    </div>
  )
}
