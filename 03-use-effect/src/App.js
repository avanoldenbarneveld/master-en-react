import logo from './logo.svg';
import './App.css';
import { PruebasComponents } from './components/PruebasComponents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <PruebasComponents />
        
      </header>
    </div>
  );
}

export default App;
