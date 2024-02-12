import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Maria"

  return (
    <div className="App">
      <HelloWorld />
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
