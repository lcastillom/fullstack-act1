import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import api from './../utils/api';
import ClienteDialog from './ClienteDialog';
import './../assets/css/ClientesAdmin.css';

const ClientesAdmin = () => {
  const [clientes, setClientes] = useState([]);
  const [editingCliente, setEditingCliente] = useState(null);
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
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    loadClientes();
  }, []);

  const loadClientes = async () => {
    try {
      const data = await api.getClientes();
      setClientes(data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const openModal = (cliente = null) => {
    if (cliente) {
      setEditingCliente(cliente);
      setFormData(cliente);
    } else {
      setEditingCliente(null);
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
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
      if (editingCliente) {
        await api.updateCliente(editingCliente._id, formData);
        toast.success('Cliente actualizado exitosamente!');
      } else {
        await api.createCliente(formData);
        toast.success('Cliente creado exitosamente!');
      }
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
      setEditingCliente(null);
      loadClientes();
      closeModal();
    } catch (error) {
      console.error('Error guardando cliente:', error);
      toast.error('Error guardando cliente.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.deleteCliente(id);
      toast.success('Cliente eliminado exitosamente!');
      loadClientes();
    } catch (error) {
      console.error('Error eliminando cliente:', error);
      toast.error('Error eliminando cliente.');
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <h1 className="title">Administración de Clientes</h1>
      <h2 className="subtitle">Lista de Clientes</h2>
      <button onClick={() => openModal()} className="btn btn-add">Agregar Cliente</button>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Ciudad</th>
              <th>Comentarios</th>
              <th>¿Cómo escuchaste?</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
              <tr key={cliente._id}>
                <td>{cliente.nombres}</td>
                <td>{cliente.apellidoPaterno}</td>
                <td>{cliente.apellidoMaterno}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.correo}</td>
                <td>{cliente.ciudad}</td>
                <td>{cliente.comentarios}</td>
                <td>{cliente.comoEscuchaste}</td>
                <td>
                  <button onClick={() => openModal(cliente)} className="btn btn-edit">
                    Editar
                  </button>
                  <button onClick={() => handleDelete(cliente._id)} className="btn btn-delete">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ClienteDialog
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        onSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        editingCliente={editingCliente}
      />
    </div>
  );
};

export default ClientesAdmin;