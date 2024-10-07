const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de importar tu instancia de Sequelize

const Destino = sequelize.define('Destino', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  tableName: 'destinos',
  timestamps: false
});

module.exports = Destino;