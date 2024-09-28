import React from 'react';
import About from './About';
import CascadaBasaseachi from './CascadaBasaseachi';
import Creel from './Creel';
import Formulario from './Formulario';
import Guachochi from './Guachochi';
import Hero from './Hero';
import Navbar from './Navbar';
import Services from './Services';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Creel />
      <CascadaBasaseachi />
      <Guachochi />
      <Services />
      <About />
      <Formulario />
    </div>
  );
};

export default Landing;