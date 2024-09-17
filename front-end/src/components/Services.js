import React from 'react';
import './../assets/css/Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-header">
        <h2>Nuestros Servicios</h2>      
      </div>
      <div className="services-list">
        <div className="service">
          <h3>Paquetes turísticos</h3>
          <p>Explora destinos exóticos con nuestros paquetes personalizados.</p>
        </div>
        <div className="service">
          <h3>Reservas de hoteles</h3>
          <p>Encuentra las mejores opciones de alojamiento a precios inmejorables.</p>
        </div>
        <div className="service">
          <h3>Transporte y tours</h3>
          <p>Disfruta de transporte seguro y cómodo en todos tus viajes.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
