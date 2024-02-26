import {useState} from 'react'


import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome'
import Saudacao from './components/Saudacao'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';






function App() {

  //const nome = "Maria"

  //const meusItens = ['React', 'Vue', 'Angular']

  //const [novo_nome, setNome] = useState()

  return (
    
    /*<div className="App">
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
      <List />
      <Evento numero="1" />
      <Form />

      <h1>Renderização Condicional</h1>
      <Condicional />
      <OutraLista itens={meusItens}/>
      <OutraLista itens={[]}/>

      <h1>State Lift</h1>

      <SeuNome setNome={setNome}/>

      <Saudacao novo_nome={novo_nome}/>

    </div>*/

    <Router>

      <NavBar />

      <Switch>
        
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/empresa">
          <Empresa />
        </Route>
        <Route path="/contato">
          <Contato />
        </Route>

      </Switch>

      <Footer/>

    </Router>

  );

}

export default App;
