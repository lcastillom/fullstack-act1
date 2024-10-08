import React, { useState, useEffect } from 'react';
import './../assets/css/Services.css';
import apiHoteles from './../utils/apiHoteles'; // Importa la utilidad apiHoteles
import HotelModal from './HotelModal'; // Importa el nuevo componente HotelModal

const Services = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [hoteles, setHoteles] = useState([]);

  const openModal = async () => {
    try {
      const data = await apiHoteles.getHoteles(); // Usa la función getHoteles de apiHoteles
      setHoteles(data);
      setModalIsOpen(true);
    } catch (error) {
      console.error('Error fetching hotels:', error);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
          <button onClick={openModal} className="btn btn-info">Ver Hoteles</button>
        </div>
        <div className="service">
          <h3>Transporte y tours</h3>
          <p>Disfruta de transporte seguro y cómodo en todos tus viajes.</p>
        </div>
      </div>

      <HotelModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        hoteles={hoteles}
      />
    </section>
  );
};

export default Services;