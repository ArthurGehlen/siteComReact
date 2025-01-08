import './App.css'
import OutraLista from './components/Listas/OutraLista';
// import HelloWorld from './components/HelloWorld'
// import SayMyName from './components/SayMyName'
// import Pessoa from './components/Pessoa'
// import List from './components/List'
// import Evento from './components/Evento'
// import Form from './components/Form';
// import Condicional from './components/Condicional';

function App() {

  const itens = ["React", "Vue", "Angular"]

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

      <h1>Renderização de Listas</h1>
      <OutraLista itens={itens} />
      <OutraLista itens={[]} />
    </div>
  );

}

export default App;
