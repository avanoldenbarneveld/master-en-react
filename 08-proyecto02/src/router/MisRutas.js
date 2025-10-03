import React from 'react';
import { Routes, Route, BrowserRouter, Navlink } from "react-router-dom";
import { Inicio } from '../components/Inicio';
import { Portafolio } from '../components/Portafolio';
import { Servicios } from '../components/Servicios';
import { Curriculum } from '../components/Curriculum';
import { Contacto } from '../components/Contacto';

export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/* HEADER Y NAVEGACION */}

        {/* CONTENIDO CENTRAL */}

        <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/inicio' element={<Inicio/>} />
            <Route path='/portafolio' element={<Portafolio/>} />
            <Route path='/servicios' element={<Servicios/>} />
            <Route path='/curriculum' element={<Curriculum/>} />
            <Route path='/contacto' element={<Contacto/>} />
        </Routes>
    </BrowserRouter>
  )
}
