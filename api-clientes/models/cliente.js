const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombres: {
    type: String,
    required: true
  },
  apellidoPaterno: {
    type: String,
    required: true
  },
  apellidoMaterno: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true,
    unique: true
  },
  ciudad: {
    type: String,
    required: true
  },
  comentarios: {
    type: String
  },
  comoEscuchaste: {
    type: String,
  }
});

// Create a unique index on the correo field
clienteSchema.index({ correo: 1 }, { unique: true });

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;