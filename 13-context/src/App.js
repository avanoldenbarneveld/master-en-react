import { useEffect, useState } from 'react';
import './App.css';
import { PruebaContext } from './components/context/PruebaContexto';
import { AppRouter } from './routing/AppRouter';

function App() {

  const [ usuario, setUsuario ] = useState({});

  useEffect(() => {
    // La primera vez que se carga el componente
    let usuario_local = JSON.parse(localStorage.getItem('usuario'));
  }, []);

    useEffect(() => {
      // cada vez que se actualice el estado usuario se guarda en el LS
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }, [usuario])

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
