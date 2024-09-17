import React from 'react';
import './../assets/css/Places.css';
import Cascada1 from './../assets/img/cascada1.png';
import Cascada2 from './../assets/img/cascada2.png';
import Cascada3 from './../assets/img/cascada3.png';


const CascadaBasaseachi = () => {
  return (
    <section id="CascadaBasaseachi" className="places cascada">
      <div className="places-header">
        <h2>Cascada de Basaseachi</h2>
      </div>
      <div className="places-list">
        <div className="place">
          <p>
            La cascada de Basaseachi, ubicada en el estado de
            Chihuahua, México, es una de las maravillas naturales más
            impresionantes del país. Con una caída libre de 246 metros,
            es la segunda cascada más alta de México y se encuentra
            dentro del Parque Nacional Cascada de Basaseachi, un área
            protegida que abarca cerca de 5,800 hectáreas de bosque y
            montañas. Este parque es un destino popular para los
            amantes del ecoturismo, ofreciendo rutas de senderismo que
            permiten a los visitantes disfrutar de vistas espectaculares y
            de la diversa flora y fauna de la región. La cascada se
            alimenta principalmente del río Durazno y su impresionante
            caída forma una niebla que crea un ambiente mágico y
            refrescante. Además, la región es rica en cultura indígena,
            particularmente de la comunidad Rarámuri, lo que añade un
            valor cultural significativo a la experiencia de visitar este
            magnífico lugar.
          </p>
        </div>
        <div className="place place-center">
          <img src={Cascada1} alt="Cascada1" />
          <img src={Cascada2} alt="Cascada2" />
          <img src={Cascada3} alt="Cascada3" />
        </div>
      </div>
    </section>
  );
};

export default CascadaBasaseachi;
