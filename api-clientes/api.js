require('dotenv').config(); // Carga las variables de entorno desde el archivo .env

const express = require('express');
const https = require('https');
const fs = require('fs');
const mongoose = require('mongoose');
const cors = require('cors'); // Importa el paquete cors
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
const rutasClientes = require('./rutasClientes'); // Importa las rutas de clientes

const port = process.env.PORT || 3001; // Usa la variable de entorno PORT
const baseUrl = process.env.URL || 'https://localhost'; // Usa la variable de entorno URL
const isProduction = process.env.IS_PRODUCTION === 'true';

// Middleware to parse JSON bodies
app.use(express.json());

// Configura CORS para permitir solicitudes desde múltiples orígenes
const allowedOrigins = process.env.ORIGINS.split(',');

// Configura CORS para permitir solicitudes desde el origen de tu aplicación de front-end
app.use(cors({
  origin: function (origin, callback) {
    // Permite solicitudes sin origen (como las de herramientas de desarrollo)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `El origen ${origin} no está permitido por la política CORS`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

// Usa las rutas importadas
app.use('/api', rutasClientes);

// Swagger configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Clientes',
      version: '1.0.0',
      description: 'API para gestionar clientes',
    },
    servers: [
      {
        url: `${baseUrl}:${port}`,
      },
    ],
  },
  apis: ['./api.js','./rutasClientes.js'], // Archivos donde se documentan los endpoints
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// MongoDB connection URI
const uri = process.env.MONGODB_URI; // Usa la variable de entorno MONGODB_URI

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });

/**
 * @swagger
 * /:
 *   get:
 *     summary: Devuelve un mensaje de bienvenida
 *     responses:
 *       200:
 *         description: Mensaje de bienvenida
 */
app.get('/', (req, res) => {
  res.send('API is running');
});

if (isProduction) {
  // Create HTTP server - hosting service add SSL/TLS
  app.listen(port, () => {
    console.log(`HTTP Server esta corriendo en ${baseUrl}:${port}`);
  });
} else {
  // Read SSL/TLS certificate and key
  const options = {
    key: fs.readFileSync('./../key.pem'),
    cert: fs.readFileSync('./../cert.pem')
  };

  // Create HTTPS server
  https.createServer(options, app).listen(port, () => {
    console.log(`HTTPS Server esta corriendo en ${baseUrl}:${port}`);
  });
}
