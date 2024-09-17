import React from 'react';
import './../assets/css/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Tus Mejores Vacaciones</h1>
          <h2>Un paraíso para ti</h2>
          <p className="hero-legend">
            La majestuosa sierra de Chihuahua, en México, es ​un destino ideal 
            para los amantes de la naturaleza ​y la aventura. 
            Ofrecemos visitas guiadas a este ​impresionante paisaje, 
            donde podrás explorar ​vastos bosques de pinos, imponentes 
            cañones y ​ríos cristalinos. Durante el recorrido, tendrás 
            la ​oportunidad de observar la rica fauna local, ​incluyendo 
            especies emblemáticas como el oso ​negro y el águila real.
            Además, nuestros guías ​expertos te llevarán a conocer las 
            tradiciones y la ​cultura de las comunidades indígenas ​Tarahumara, 
            quienes habitan esta región desde ​tiempos ancestrales. 
            No te pierdas la oportunidad ​de vivir una experiencia única e 
            inolvidable en uno ​de los entornos naturales más 
            espectaculares de ​México.
          </p>
          <p className="hero-legend">
            ¡Reserva tu visita a la sierra de ​Chihuahua hoy mismo y descubre 
            la magia de ​este paraíso natural!
          </p>
        </div>
        <div className="hero-empty-space"></div>
      </div>
    </section>
  );
};

export default Hero;
