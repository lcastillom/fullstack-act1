const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de importar tu instancia de Sequelize
const Destino = require('./Destino'); // Importa el modelo Destino

const Hotel = sequelize.define('Hotel', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  destinoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Destino, // Nombre del modelo al que hace referencia
      key: 'id' // Llave primaria del modelo Destino
    }
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  caracteristicas: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precioNocheMin: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  precioNocheMax: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  contacto: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  tableName: 'hoteles',
  timestamps: false
});

// Define la relación
Hotel.belongsTo(Destino, { foreignKey: 'destinoId' });
Destino.hasMany(Hotel, { foreignKey: 'destinoId' });

module.exports = Hotel;