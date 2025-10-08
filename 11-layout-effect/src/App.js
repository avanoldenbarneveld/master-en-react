import logo from './logo.svg';
import './App.css';
import { EjemploComponent } from './components/EjemploComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EjemploComponent />
      </header>
    </div>
  );
}

export default App;
