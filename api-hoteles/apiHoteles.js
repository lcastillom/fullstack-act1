require('dotenv').config(); // Carga las variables de entorno desde el archivo .env

const express = require('express');
const https = require('https');
const fs = require('fs');
const cors = require('cors'); // Importa el paquete cors
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
const rutasDestinos = require('./rutasDestinos');
const rutasHoteles = require('./rutasHoteles');
const sequelize = require('./config/database'); // Importa tu instancia de Sequelize

const port = process.env.PORT || 3002; // Usa la variable de entorno PORT
const isHttps = process.env.IS_HTTPS === 'true';
const baseUrl = getBaseUrl();

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
app.use('/api', rutasDestinos);
app.use('/api', rutasHoteles);

// Swagger configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Hoteles',
      version: '1.0.0',
      description: 'API para gestionar Hoteles',
    },
    servers: [
      {
        url: `${baseUrl}${port == 80 ? '' : (':' + port)}`,
      },
    ],
  },
  apis: ['./apiHoteles.js','./rutasDestinos.js','./rutasHoteles.js'], // Archivos donde se documentan los endpoints
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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
  res.send('API de Hoteles funcionando correctamente');
});

if (isHttps) {
  // Read SSL/TLS certificate and key
  const options = {
    key: fs.readFileSync('./../key.pem'),
    cert: fs.readFileSync('./../cert.pem')
  };

  sequelize.sync({ force: false })
    .then(() => {
      // Create HTTPS server
      https.createServer(options, app).listen(port, () => {
        console.log(`HTTPS Server esta corriendo en ${baseUrl}:${port}`);
      });
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
} else {
  sequelize.sync({ force: false })
  .then(() => {
    // Create HTTP server - hosting service add SSL/TLS
    app.listen(port, () => {
      console.log(`HTTP Server esta corriendo en ${baseUrl}:${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
}

function getBaseUrl() {
  const url = process.env.URL;
  if (!url) {
    return `${isHttps ? "https" : "http"}://localhost`;
  }

  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  return `${isHttps ? "https" : "http"}://${url}`;
}