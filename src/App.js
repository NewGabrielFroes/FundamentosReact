import './App.css';
import Frase from './components/Frase';
import List from './components/List';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  const nome = "Maria"
  const foto = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Gabriel" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome="Gabriel" 
        idade="17" 
        profissao="Programador" 
        foto={foto} 
      />
      <List />
    </div>
  );
}

export default App;
