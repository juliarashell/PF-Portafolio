import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar-container">
      <ul className="nav">
        <li className="nav-item">
          <Link to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to="/sobre-mi">Sobre Mí</Link>
        </li>
        <li className="nav-item">
          <Link to="/proyectos">Proyectos</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;