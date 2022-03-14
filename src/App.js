import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional'
import OutraLista from './components/OutraLista'

function App() {

	const meusItens = ['React', 'Vue', 'Angular']

    
	return (
	    <div className="App">
	      <h1>Renderização condicional</h1>
	      <OutraLista itens={meusItens} />
	      <OutraLista itens={[]} />
	    </div>
  	);
}

export default App;
