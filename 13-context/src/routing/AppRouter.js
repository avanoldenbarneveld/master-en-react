import React from 'react'
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Articulos } from '../components/Articulos';
import { Acerca } from '../components/Acerca';
import { Contacto } from '../components/Contacto';
import { Login } from '../components/Login';

export const AppRouter = () => {
  return (
    <BrowserRouter>
    {/* MENU NAVEGACION */}

    {/* CONFIGURAR RUTAS */} 

    <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/articulos' element={<Articulos />} />
        <Route path='/acerca-de' element={<Acerca />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/login' element={<Login />} />

        <Route path='*' element={(
            <div>
                <h1> EROR ESTA PAGINA NO EXISTE</h1>
            </div>
        )} />
    </Routes>

    </BrowserRouter>
  )
}
