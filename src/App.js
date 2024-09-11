import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.js';
import AgendamentoPage from './Pages/Agendamento/AgendamentoPage.js';
import BarbeirosPage from './Pages/Barbeiro/BarbeiroPage.js';
import UnidadesPage from './Pages/Unidades/UnidadesPages.js';


import styles from './App.css';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/agendamento" element={<AgendamentoPage />} />
        <Route path="/barbeiros" element={<BarbeirosPage />} />
        <Route path="/unidades" element={<UnidadesPage />} />
      </Routes>


    </Router>
  );
}

export default App;
