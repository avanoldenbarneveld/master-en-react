import { useState } from "react";
import { Buscador } from "./components/Buscador";
import { Crear } from "./components/Crear";
import { Listado } from "./components/Listado";

function App() {

  const [listadoState, setListadoState] = useState([])

  return (
    <div className="layout">
        {/* Cabecera */}
         <header className="header">
            <div className="logo">
                <div className="play"></div>
            </div>
            <h1>MisPelis</h1>
         </header>
        {/* Barra de Navegación */}
        <nav className="nav">
         <ul>
            <li> <a href="/#">Inicio</a></li>
            <li> <a href="/#">Películas</a></li>
            <li> <a href="/#">Blog</a></li>
            <li> <a href="/#">Contacto</a></li>
         </ul>
        </nav>

        {/* Contenido principal */}
         <section className="content">
        {/* Aquí va el listado de películas */}
        <Listado listadoState={listadoState} setListadoState={setListadoState}/>

      </section>
        
         {/* Barra lateral */}
         <aside className="lateral">
        <Buscador />

        <Crear setListadoState={setListadoState} />
         </aside>
        
        {/* Pie de página */}

        <footer className="footer">
            &copy; Máster en Javasript ES12 y TypeScript - <a href="https://victorroblesweb.es">victorroblesweb.es</a>
        </footer>
    </div>
  );
}

export default App;
