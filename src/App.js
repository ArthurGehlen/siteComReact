import './App.css';
// import HelloWorld from './components/HelloWorld';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  return (
    <div className="App">
      {/* <HelloWorld /> */}
      {/* <SayMyName name={name} /> */}

      {/* <Pessoa
        name="Arthur"
        age="15"
        avatar="https://placehold.co/150" />
    
      <List /> */}
      <h1>Testando Eventos</h1>

      <Evento />
      <Evento number={1} />
      <Form />
    </div>

  );

}

export default App;
