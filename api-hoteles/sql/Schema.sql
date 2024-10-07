CREATE DATABASE IF NOT EXISTS hoteles;

USE hoteles;

-- Crear tabla destinos
CREATE TABLE destinos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL
);

-- Crear tabla hoteles
CREATE TABLE hoteles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  destinoId INT NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  caracteristicas VARCHAR(255) NOT NULL,
  precioNocheMin DECIMAL(12, 4) NOT NULL,
  precioNocheMax DECIMAL(12, 4) NOT NULL,
  contacto VARCHAR(255) NOT NULL,
  FOREIGN KEY (destinoId) REFERENCES destinos(id)
);