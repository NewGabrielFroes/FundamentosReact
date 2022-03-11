import './App.css';
import HelloWorld from './components/HelloWorld';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';

function App() {
  const nome = "Maria"
  const foto = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Gabriel" />
      <SayMyName nome="João" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome="Gabriel" 
        idade="17" 
        profissao="Programador" 
        foto={foto} 
      />
    </div>
  );
}

export default App;
