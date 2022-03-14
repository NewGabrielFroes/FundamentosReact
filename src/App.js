import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional'

function App() {
  const nome = "Maria"
  const foto = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Renderização condicional</h1>
      <Condicional />
    </div>
  );
}

export default App;
