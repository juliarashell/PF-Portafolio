import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Inicio from './Portafolio/Inicio';
import SobreMi from './Portafolio/SobreMi';
import Proyectos from './Portafolio/Proyectos';
import Contacto from './Portafolio/Contacto';
import Navbar from './Portafolio/Navbar'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Componente de barra de navegación */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
