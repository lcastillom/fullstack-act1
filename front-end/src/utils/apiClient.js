import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_CLIENTES_URL, // Usa la variable de entorno para la URL base
  headers: {
    'Content-Type': 'application/json'
  }
});

const apiClient = {
  // Función para obtener todos los clientes
  getClientes: async () => {
    try {
      const response = await axiosClient.get('/clientes');
      return response.data;
    } catch (error) {
      console.error('Error fetching clients:', error);
      throw error;
    }
  },

  // Función para obtener un cliente por ID
  getClienteById: async (id) => {
    try {
      const response = await axiosClient.get(`/clientes/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching client with ID ${id}:`, error);
      throw error;
    }
  },

  // Función para crear un nuevo cliente
  createCliente: async (cliente) => {
    try {
      const response = await axiosClient.post('/clientes', cliente);
      return response.data;
    } catch (error) {
      console.error('Error creating client:', error);
      throw error;
    }
  },

  // Función para actualizar un cliente por ID
  updateCliente: async (id, cliente) => {
    try {
      const response = await axiosClient.put(`/clientes/${id}`, cliente);
      return response.data;
    } catch (error) {
      console.error(`Error updating client with ID ${id}:`, error);
      throw error;
    }
  },

  // Función para eliminar un cliente por ID
  deleteCliente: async (id) => {
    try {
      const response = await axiosClient.delete(`/clientes/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting client with ID ${id}:`, error);
      throw error;
    }
  }
};

export default apiClient;