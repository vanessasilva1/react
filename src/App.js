import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Vanessa" />
      <SayMyName nome="João" />
      <SayMyName nome="Rosa" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome="Eduardo" 
        idade="25" 
        profissao="Arquiteto"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );

}

export default App;
