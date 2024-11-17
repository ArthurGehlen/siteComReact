import './App.css';
// import HelloWorld from './components/HelloWorld';
// import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  return (
    <div className="App">
      {/* <HelloWorld /> */}
      {/* <SayMyName name={name} /> */}

      <Pessoa
        name="Arthur"
        age="15"
        avatar="https://via.placeholder.com/150" />
    </div>
  );

}

export default App;
