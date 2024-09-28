import React, { useState } from 'react';
import './../assets/css/Navbar.css'; // CSS específico para el menú

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Controla si el menú está abierto

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Tus Vacaciones</h2>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        {/* Icono de hamburguesa */}
        <span className="navbar-icon">&#9776;</span>
      </button>
      <ul className={`navbar-menu ${isOpen ? 'navbar-menu-open' : ''}`}>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#about">¿Quienes somos?</a></li>
        <li><a href="#contact">Contactanos</a></li>
        <li><a href="#Creel">Creel</a></li>
        <li><a href="#CascadaBasaseachi">Cascada Basaseachi</a></li>
        <li><a href="#Guachochi">Guachochi</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
