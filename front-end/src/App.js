import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Creel from './components/Creel';
import CascadaBasaseachi from './components/CascadaBasaseachi';
import Guachochi from './components/Guachochi';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Creel />
      <CascadaBasaseachi />
      <Guachochi />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
