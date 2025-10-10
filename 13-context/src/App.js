import { useState } from 'react';
import './App.css';
import { PruebaContext } from './components/context/PruebaContexto';
import { AppRouter } from './routing/AppRouter';

function App() {

  const [ usuario, setUsuario ] = useState({
    username: "@albertovanweb", 
    nombre: "Alberto",
    web:"albertovan.com"})

  const curso = {
    id: 1,
    titulo: "Máster en TypeScript",
    contenido: "Muchas horas de contenido..."
  };

  return (
    <div className="App">
      <PruebaContext.Provider value={{
        usuario,
        setUsuario
      }}>
        <AppRouter />
      </PruebaContext.Provider>

    </div>
  );
}

export default App;
