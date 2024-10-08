import React, { useState } from 'react';
import './../assets/css/Formulario.css';
import apiClientes from '../utils/apiClientes'; // Importa la utilidad api
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
      const response = await apiClientes.createCliente(formData);
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
      toast.error('Error creando cliente');
    }
  };

  return (
    <section className="form-container">
      <div className="form-header">
        <h2>Formulario de Contacto</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombres">Nombres</label>
          <input
            type="text"
            id="nombres"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellidoPaterno">Apellido Paterno</label>
          <input
            type="text"
            id="apellidoPaterno"
            name="apellidoPaterno"
            value={formData.apellidoPaterno}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellidoMaterno">Apellido Materno</label>
          <input
            type="text"
            id="apellidoMaterno"
            name="apellidoMaterno"
            value={formData.apellidoMaterno}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group full-width">
          <label htmlFor="comentarios">Comentarios</label>
          <textarea
            id="comentarios"
            name="comentarios"
            value={formData.comentarios}
            onChange={handleChange}
            rows="4"
          />
        </div>
        <div className="form-group full-width">
          <label htmlFor="comoEscuchaste">¿Cómo escuchaste de nosotros?</label>
          <input
            type="text"
            id="comoEscuchaste"
            name="comoEscuchaste"
            value={formData.comoEscuchaste}
            onChange={handleChange}
            placeholder="Opcional"
          />
        </div>
        <div className="form-group full-width">
          <button type="submit" className="full-width">Enviar</button>
        </div>
      </form>
    </section>
  );
};

export default Formulario;