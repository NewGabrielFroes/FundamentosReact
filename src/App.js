import './App.css';

function App() {
  const name = 'Gabriel'
  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
      <h2>Alterando JSX</h2>
      <p>Olá, {name}</p>
      <p>Soma: {sum(2, 2)}</p>
      <img src={url} alt='Minha Imagem'></img>
    </div>
  );
}

export default App;
