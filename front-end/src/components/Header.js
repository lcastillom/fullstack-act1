import React from 'react';
import './../assets/css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Tus Vacaciones</div>
      <nav>
        <ul>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#about">¿Quienes somos?</a></li>
          <li><a href="#contact">Contactanos</a></li>
          <li><a href="#Creel">Creel</a></li>
          <li><a href="#CascadaBasaseachi">Cascada Basaseachi</a></li>
          <li><a href="#Guachochi">Guachochi</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
