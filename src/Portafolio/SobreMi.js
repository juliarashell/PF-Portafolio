import React, { useEffect } from 'react';
import Me from '../images/me.jpeg';  
import './SobreMi.css';

function SobreMi() {
  // Al cargar el componente, agrega una clase al body para esta pestaña
  useEffect(() => {
    document.body.className = 'sobre-mi';
    return () => {
      // Al desmontar el componente, elimina la clase del body
      document.body.className = '';
    };
  }, []);

  return (
    <div className="SobreMi-container">
      <h3 className="sobre-mi-title">¿Quién soy?</h3>
      <img src={Me} alt="Mi foto" className="about-photo" />
      <p className="sobre-mi-description">
        Soy estudiante de octavo semestre de la carrera de Ingeniería en Sistemas, apasionada por el mundo del diseño web y en constante aprendizaje de nuevos programas para perfeccionar mis habilidades.
      </p>
      <p className="sobre-mi-2">
        Mi deseo es fusionar mi interés en la tecnología con la criminología, buscando así un camino que me permita contribuir a la sociedad de manera significativa. 
        Como persona, me considero responsable, sincera, empática e íntegra en todas mis interacciones.
      </p>
      <p className="sobre-mi-3">
        Cuando no estoy inmersa en el mundo de la informática, mi pasatiempo favorito es viajar con mi familia, explorando nuevos horizontes y creando recuerdos inolvidables. <br></br>
        Mi fe en Dios es un pilar fundamental en mi vida, guiándome en mi camino y brindándome la fuerza para mejorar cada día.
      </p>
    </div>
  );
}

export default SobreMi;
