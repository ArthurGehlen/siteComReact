import './App.css';
// import HelloWorld from './components/HelloWorld';
// import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';

function App() {

  return (
    <div className="App">
      {/* <HelloWorld /> */}
      {/* <SayMyName name={name} /> */}

      <Pessoa
        name="Arthur"
        age="15"
        avatar="https://placehold.co/150" />
    
      <List />
    </div>

  );

}

export default App;
