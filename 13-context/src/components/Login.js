import React, { useContext } from 'react'
import { PruebaContext } from './context/PruebaContexto';

export const Login = () => {

  const { usuario, setUsuario } = useContext(PruebaContext)

  const guardarDatos = e => {
    e.preventDefault();

    console.log(e.target.username.value)

    let usuario_identificado = {
      username: e.target.username.value, 
      nombre: e.target.nombre.value,
      web:e.target.web.value
      };

      setUsuario(usuario);
  };

  return (
    <div>
      <h1>Identificate</h1>
      <p>Página de login</p>

      <form className='login' onSubmit={guardarDatos}>

        <input type='text' name='username' placeholder='Usuario:' />
        <input type='text' name='nombre' placeholder='Nombre:' />
        <input type='text' name='web' placeholder='Web:' />

        <input type='submit' value="Enviar" />

      </form>

    </div>
  )
}
