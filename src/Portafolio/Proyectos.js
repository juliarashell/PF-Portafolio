import React, { useEffect } from 'react';
import './Proyectos.css';

function Proyectos() {
  // Al cargar el componente, agrega una clase al body para esta pestaña
  useEffect(() => {
    document.body.className = 'proyectos';
    return () => {
      // Al desmontar el componente, elimina la clase del body
      document.body.className = '';
    };
  }, []);

  return (
    <div>
      <h2>Proyectos Realizados<br></br>
          Con Arduino</h2>
      <div className="proyectos-container">
        <div className="proyecto">
          <a href="https://github.com/juliarashell/-SnakeGame-" target="_blank" rel="noopener noreferrer">
            <h3>Snake Game</h3><br></br>
            <p>El famoso minijuego diseñado mediante una matriz 8×8</p>
          </a>
        </div>
        <div className="proyecto">
          <a href="https://github.com/juliarashell/DISPLAY-7-SEGMENTOS" target="_blank" rel="noopener noreferrer">
            <h3>Contador con Display</h3>
            <p>Se utiliza un display de 7 segmentos, mediante cátodo común para crear un contador ascendente y descendente, 
                controlado por medio de dos Push Button.
            </p>
          </a>
        </div>
        <div className="proyecto">
          <a href="https://github.com/juliarashell/Lab5--Sensor-Ultrasonico" target="_blank" rel="noopener noreferrer">
            <h3>Sensor Ultrasónico</h3>
            <p>Se utiliza, un sensor ultrasónico para medir distancias de objetos y graficar en processing la lectura de la 
              transmisión del sonido.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
