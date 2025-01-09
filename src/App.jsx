import './App.css'
import { useState } from 'react';
// import OutraLista from './components/Listas/OutraLista';
// import HelloWorld from './components/HelloWorld'
// import SayMyName from './components/SayMyName'
// import Pessoa from './components/Pessoa'
// import List from './components/List'
// import Evento from './components/Evento'
// import Form from './components/Form';
// import Condicional from './components/Condicional';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {

  // const itens = ["React", "Vue", "Angular"]
  const [nome, setNome] = useState();

  return (
    <div className="App">
      {/* <Pessoa
        name="Arthur"
        age="15"
        avatar="https://placehold.co/150" />
    
      <List /> */}
      {/* <h1>Testando Eventos</h1> */}

      {/* <Evento number={1} /> */}
      {/* <Evento />
      <Form /> */}

      {/* <Condicional /> */}

      {/* <h1>Renderização de Listas</h1>
      <OutraLista itens={itens} />
      <OutraLista itens={[]} /> */}

      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
    </div>
  );

}

export default App;
