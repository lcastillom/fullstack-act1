import React from 'react';
import './../assets/css/Places.css';
import Cusarare from './../assets/img/cusarare.png';
import LagoArareco from './../assets/img/lagoarareco.png';
import Recowata from './../assets/img/recowata.png';
import Teleferico from './../assets/img/teleferico.png';

const Creel = () => {
  return (
    <section id="Creel" className="places creel">
      <div className="places-header">
        <h2>Creel Chihuahua</h2>
      </div>
      <div className="places-list">
        <div className="place">
          <p>
            Creel es una encantadora localidad situada en el estado
            de Chihuahua, México. Es conocida como la puerta de
            entrada a la majestuosa Sierra Tarahumara y la famosa
            Barranca del Cobre, uno de los sistemas de cañones
            más impresionantes del mundo. Fundada en 1907, Creel
            tiene una rica historia ligada al ferrocarril y a la cultura
            indígena Rarámuri. Su altitud de aproximadamente
            2,340 metros sobre el nivel del mar le confiere un clima
            templado y fresco, ideal para el ecoturismo y las
            actividades al aire libre. Entre sus principales atractivos
            se encuentran el Lago de Arareco, las formaciones
            rocosas del Valle de los Hongos y el Museo Casa de las
            Artesanías. Además, Creel es un punto de partida
            popular para tomar el famoso tren Chepe, que ofrece
            vistas espectaculares de la región.
          </p>
        </div>
        <div className="place place-center">
          <img src={Teleferico} alt="Teleferico" />
          <img src={Recowata} alt="Recowata" />
          <img src={LagoArareco} alt="Lago Arareco" />
          <img src={Cusarare} alt="Cusarare" />
        </div>
      </div>
    </section>
  );
};

export default Creel;
