import React from 'react';
import Modal from 'react-modal';

const ClienteDialog = ({ isOpen, onRequestClose, onSubmit, formData, handleChange, editingCliente }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Formulario de Cliente"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>{editingCliente ? 'Editar Cliente' : 'Agregar Cliente'}</h2>
      <form onSubmit={onSubmit} className="form">
        <div className="form-group">
          <label htmlFor="formNombres">Nombres</label>
          <input
            type="text"
            id="formNombres"
            name="nombres"
            value={formData.nombres}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="formApellidoPaterno">Apellido Paterno</label>
          <input
            type="text"
            id="formApellidoPaterno"
            name="apellidoPaterno"
            value={formData.apellidoPaterno}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="formApellidoMaterno">Apellido Materno</label>
          <input
            type="text"
            id="formApellidoMaterno"
            name="apellidoMaterno"
            value={formData.apellidoMaterno}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="formTelefono">Teléfono</label>
          <input
            type="text"
            id="formTelefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="formCorreo">Correo</label>
          <input
            type="email"
            id="formCorreo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="formCiudad">Ciudad</label>
          <input
            type="text"
            id="formCiudad"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="formComentarios">Comentarios</label>
          <textarea
            id="formComentarios"
            name="comentarios"
            value={formData.comentarios}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formComoEscuchaste">¿Cómo escuchaste de nosotros?</label>
          <input
            type="text"
            id="formComoEscuchaste"
            name="comoEscuchaste"
            value={formData.comoEscuchaste}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn">
          {editingCliente ? 'Actualizar' : 'Guardar'}
        </button>
        <button type="button" onClick={onRequestClose} className="btn btn-cancel">
          Cancelar
        </button>
      </form>
    </Modal>
  );
};

export default ClienteDialog;