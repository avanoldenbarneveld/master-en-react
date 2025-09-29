import React from 'react'

export const Crear = () => {

    const titulo = "Añadir película";

  return (
            <div className="add">
                <h3 className="title">{titulo}</h3>
                <form>
                        <input type="text" placeholder="Titulo" />
                        <textarea placeholder="Descripción" />
                        <input type="submit" value="Guardar"/>
                </form>
            </div>
  )
}
