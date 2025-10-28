import { useState } from 'react'
import { Inicio } from './components/pages/Inicio'
import { Articulos } from './components/pages/Articulos'
import { Crear } from './components/pages/Crear'
import { Rutas } from './routing/rutas'

function App() {

  return (
      <div className='App'>
        <h1>Blog con React</h1>

        <Rutas />
      </div>
  )
}

export default App
