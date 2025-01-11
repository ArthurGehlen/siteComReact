import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import { useState } from 'react';
// import OutraLista from './components/Listas/OutraLista';
// import Evento from './components/Evento'
// import Form from './components/Form';
// import Condicional from './components/Condicional';
// import SeuNome from './components/SeuNome';
// import Saudacao from './components/Saudacao';
import NavBar from "./components/Layout/NavBar/NavBar"
import Home from "./pages/Home"
import Empresa from "./pages/Empresa"
import Contato from "./pages/Contato"
import Footer from "./components/Layout/Footer/Footer"

function App() {

  // const itens = ["React", "Vue", "Angular"]
  // const [nome, setNome] = useState();

  return (
    <div className="App">
      {/* <h1>Testando Eventos</h1> */}

      {/* <Evento number={1} /> */}
      {/* <Evento />
      <Form /> */}

      {/* <Condicional /> */}

      {/* <h1>Renderização de Listas</h1>
      <OutraLista itens={itens} />
      <OutraLista itens={[]} /> */}

      {/* <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} /> */}

      <Router>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/empresa' element={<Empresa />}></Route>
          <Route path='/contato' element={<Contato />}></Route>
        </Routes>

        <Footer />
      </Router>

    </div>
  );

}

export default App;
