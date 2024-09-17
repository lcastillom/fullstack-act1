import React from 'react';
import './../assets/css/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contáctanos</h2>
      <form>
        <input type="text" placeholder="Tu nombre" />
        <input type="email" placeholder="Tu email" />
        <textarea placeholder="Tu mensaje"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
