import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_HOTELES_URL, // Usa la variable de entorno para la URL base
  headers: {
    'Content-Type': 'application/json'
  }
});

const apiHoteles = {
  // Función para obtener todos los hoteles, opcionalmente filtrados por destinoId
  getHoteles: async (destinoId) => {
    try {
      const response = await axiosClient.get('/hoteles', {
        params: destinoId ? { destinoId } : {}
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching hotels:', error);
      throw error;
    }
  },

  // Función para obtener un hotel por ID
  getHotelById: async (id) => {
    try {
      const response = await axiosClient.get(`/hoteles/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching hotel with ID ${id}:`, error);
      throw error;
    }
  },

  // Función para crear un nuevo hotel
  createHotel: async (hotel) => {
    try {
      const response = await axiosClient.post('/hoteles', hotel);
      return response.data;
    } catch (error) {
      console.error('Error creating hotel:', error);
      throw error;
    }
  },

  // Función para actualizar un hotel por ID
  updateHotel: async (id, hotel) => {
    try {
      const response = await axiosClient.put(`/hoteles/${id}`, hotel);
      return response.data;
    } catch (error) {
      console.error(`Error updating hotel with ID ${id}:`, error);
      throw error;
    }
  },

  // Función para eliminar un hotel por ID
  deleteHotel: async (id) => {
    try {
      const response = await axiosClient.delete(`/hoteles/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting hotel with ID ${id}:`, error);
      throw error;
    }
  },

  // Función para obtener todos los destinos
  getDestinos: async () => {
    try {
      const response = await axiosClient.get('/destinos');
      return response.data;
    } catch (error) {
      console.error('Error fetching destinations:', error);
      throw error;
    }
  },

  // Función para obtener un destino por ID
  getDestinoById: async (id) => {
    try {
      const response = await axiosClient.get(`/destinos/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching destination with ID ${id}:`, error);
      throw error;
    }
  },

  // Función para crear un nuevo destino
  createDestino: async (destino) => {
    try {
      const response = await axiosClient.post('/destinos', destino);
      return response.data;
    } catch (error) {
      console.error('Error creating destination:', error);
      throw error;
    }
  },

  // Función para actualizar un destino por ID
  updateDestino: async (id, destino) => {
    try {
      const response = await axiosClient.put(`/destinos/${id}`, destino);
      return response.data;
    } catch (error) {
      console.error(`Error updating destination with ID ${id}:`, error);
      throw error;
    }
  },

  // Función para eliminar un destino por ID
  deleteDestino: async (id) => {
    try {
      const response = await axiosClient.delete(`/destinos/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting destination with ID ${id}:`, error);
      throw error;
    }
  }
};

export default apiHoteles;