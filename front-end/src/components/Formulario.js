import React, { useState } from 'react';
import './../assets/css/Formulario.css';
import api from './../utils/api'; // Importa la utilidad api
import { toast } from 'react-toastify';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    telefono: '',
    correo: '',
    ciudad: '',
    comentarios: '',
    comoEscuchaste: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.createCliente(formData);
      console.log('Cliente creado:', response);

       // Muestra un mensaje de éxito
       toast.success('Cliente creado exitosamente!');
      
      // Limpia el formulario restableciendo el estado formData a sus valores iniciales
      setFormData({
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        telefono: '',
        correo: '',
        ciudad: '',
        comentarios: '',
        comoEscuchaste: ''
      });
    } catch (error) {
      console.error('Error creando cliente:', error);
      // Muestra un mensaje de error
      toast.error('Error creando cliente.');
    }
  };

  return (
    <section className="formulario-section">
      <form className="formulario" onSubmit={handleSubmit}>
        <h2>Solicita Información</h2>

        <div className="form-group">
          <label>Nombres:</label>
          <input
            type="text"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Apellido Paterno:</label>
          <input
            type="text"
            name="apellidoPaterno"
            value={formData.apellidoPaterno}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Apellido Materno:</label>
          <input
            type="text"
            name="apellidoMaterno"
            value={formData.apellidoMaterno}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Teléfono:</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Correo Electrónico:</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Ciudad:</label>
          <input
            type="text"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group full-width">
          <label>Comentarios:</label>
          <textarea
            name="comentarios"
            value={formData.comentarios}
            onChange={handleChange}
            placeholder="Opcional"
          />
        </div>

        <div className="form-group full-width">
          <label>¿Cómo escuchaste de nosotros?</label>
          <input
            type="text"
            name="comoEscuchaste"
            value={formData.comoEscuchaste}
            onChange={handleChange}
            placeholder="Opcional"
          />
        </div>

        <button type="submit" className="full-width">Enviar</button>
      </form>
    </section>
  );
};

export default Formulario;
