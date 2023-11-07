import React from 'react';
import './Contacto.css';
import gitLogo from '../images/gitlogo.png';
import igLogo from '../images/iglogo.png';
import fbLogo from '../images/fblogo.png';

function Contacto() {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h3>Contáctame</h3> 
        <p>Si deseas ponerte en contacto conmigo, puedes hacerlo a través del siguiente mail o número de teléfono:</p>
        <p><strong> Email:</strong> jlopezc@miumg.edu.gt</p>
        <p><strong> Teléfono:</strong> 5571-9325</p>
        <form>
          <input type="text" placeholder="Nombre" /> 
          <input type="email" placeholder="Correo" />
          <input type="mensaje" placeholder="Mensaje" />
          <button type="submit">Enviar</button>
        </form>
      </div>
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

export default Contacto;
