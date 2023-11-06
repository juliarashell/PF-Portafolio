import React from 'react';
import miFoto from '../images/inicio.jpeg';  
import './Inicio.css';
import gitLogo from '../images/gitlogo.png';
import igLogo from '../images/iglogo.png';
import fbLogo from '../images/fblogo.png';

function Inicio() {
  return (
    <div className="inicio-container">
      <h2>Bienvenido a mi Portafolio!</h2>
      <img src={miFoto} alt="Mi foto" className="profile-photo" />
      <h3>Rashell Cifuentes</h3>
      <h4>Estudiante de Ingeniería en Sistemas</h4>
      <p>
        Mi objetivo es combinar mi sólida formación técnica con mi pasión por crear experiencias web atractivas y funcionales.
        Busco oportunidades para colaborar en proyectos emocionantes y aprender continuamente en el mundo del desarrollo web.
      </p>
      <div className="contact-icons">
      <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fjuliarashell" target="_blank" rel="noopener noreferrer">
          <img src={fbLogo} alt="Facebook" /> 
        </a>
        <a href="https://github.com/juliarashell" target="_blank" rel="noopener noreferrer">
          <img src={gitLogo} alt="GitHub" /> 
        </a>
        <a href="https://www.instagram.com/juliarashell" target="_blank" rel="noopener noreferrer">
          <img src={igLogo} alt="Instagram" /> 
        </a>
      </div>
    </div>
  );
}

export default Inicio;



