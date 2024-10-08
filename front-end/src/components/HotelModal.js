import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import apiHoteles from './../utils/apiHoteles'; // Importa la utilidad apiHoteles
import './../assets/css/HotelModal.css'; // Importa los estilos CSS

const HotelModal = ({ isOpen, onRequestClose, hoteles }) => {
  const [destinos, setDestinos] = useState([]);
  const [selectedDestino, setSelectedDestino] = useState(''); // Estado para el destino seleccionado

  useEffect(() => {
    const fetchDestinos = async () => {
      try {
        const data = await apiHoteles.getDestinos(); // Usa la función getDestinos de apiHoteles
        setDestinos(data);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinos();
  }, []);

  const handleDestinoChange = (event) => {
    setSelectedDestino(event.target.value); // Actualiza el destino seleccionado
  };

  const filteredHoteles = selectedDestino
    ? hoteles.filter(hotel => hotel.destinoId == selectedDestino) // Filtra los hoteles por destino
    : hoteles;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Lista de Hoteles"
      className="hotel-modal"
      overlayClassName="hotel-modal-overlay" // Aplica la clase overlay
    >
      <h2>Lista de Hoteles</h2>
      <div className="dropdown-container">
        <label htmlFor="destinoSelect">Selecciona un destino:</label>
        <select id="destinoSelect" value={selectedDestino} onChange={handleDestinoChange} className="dropdown-select">
          <option value="">Todos los destinos</option>
          {destinos.map(destino => (
            <option key={destino.id} value={destino.id}>{destino.nombre}</option>
          ))}
        </select>
      </div>
      <div className="hotel-list-container">
        <ul className="hotel-list">
          {filteredHoteles.map(hotel => (
            <li key={hotel.id} className="hotel-item">
              <h3>{hotel.nombre}</h3>
              <p>Características: {hotel.caracteristicas}</p>
              <p>Rango de precios: ${hotel.precioNocheMin} - ${hotel.precioNocheMax} por noche</p>
              <p>Contacto: {hotel.contacto}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="modal-footer">
        <button onClick={onRequestClose} className="close-button">Cerrar</button>
      </div>
    </Modal>
  );
};

export default HotelModal;