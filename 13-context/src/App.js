import './App.css';
import { PruebaContext } from './components/context/PruebaContexto';
import { AppRouter } from './routing/AppRouter';

function App() {
  return (
    <div className="App">
      <PruebaContext.Provider value={curso}>
        <AppRouter />
      </PruebaContext.Provider>

    </div>
  );
}

export default App;
