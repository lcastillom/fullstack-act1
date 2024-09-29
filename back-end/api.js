require('dotenv').config(); // Carga las variables de entorno desde el archivo .env

const express = require('express');
const https = require('https');
const fs = require('fs');
const mongoose = require('mongoose');
const cors = require('cors'); // Importa el paquete cors
const Cliente = require('./models/cliente'); // Importa el modelo de Cliente
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();

const port = process.env.PORT || 3001; // Usa la variable de entorno PORT
const baseUrl = process.env.URL || 'https://localhost'; // Usa la variable de entorno URL

// Middleware to parse JSON bodies
app.use(express.json());

// Configura CORS para permitir solicitudes desde el origen de tu aplicación de front-end
app.use(cors({
  origin: process.env.ORIGIN // Reemplaza con el origen de tu aplicación de front-end
}));

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
  apis: ['./api.js'], // Archivos donde se documentan los endpoints
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

/**
 * @swagger
 * /api/clientes:
 *   post:
 *     summary: Crea o actualiza un cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombres:
 *                 type: string
 *               apellidoPaterno:
 *                 type: string
 *               apellidoMaterno:
 *                 type: string
 *               telefono:
 *                 type: string
 *               correo:
 *                 type: string
 *               ciudad:
 *                 type: string
 *               comentarios:
 *                 type: string
 *               comoEscuchaste:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cliente creado o actualizado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
app.post('/api/clientes', async (req, res) => {
  try {
    const { correo, ...rest } = req.body;
    const cliente = await Cliente.findOneAndUpdate(
      { correo },
      { $set: rest },
      { new: true, upsert: true, runValidators: true }
    );
    res.status(201).send(cliente);
  } catch (error) {
    res.status(400).send(error);
  }
});

/**
 * @swagger
 * /api/clientes:
 *   get:
 *     summary: Obtiene todos los clientes
 *     responses:
 *       200:
 *         description: Lista de clientes
 *       500:
 *         description: Error en el servidor
 */
app.get('/api/clientes', async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.status(200).send(clientes);
  } catch (error) {
    res.status(500).send(error);
  }
});

/**
 * @swagger
 * /api/clientes/{id}:
 *   get:
 *     summary: Obtiene un cliente por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *       404:
 *         description: Cliente no encontrado
 *       500:
 *         description: Error en el servidor
 */
app.get('/api/clientes/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).send();
    }
    res.status(200).send(cliente);
  } catch (error) {
    res.status(500).send(error);
  }
});

/**
 * @swagger
 * /api/clientes/{id}:
 *   put:
 *     summary: Actualiza un cliente por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombres:
 *                 type: string
 *               apellidoPaterno:
 *                 type: string
 *               apellidoMaterno:
 *                 type: string
 *               telefono:
 *                 type: string
 *               correo:
 *                 type: string
 *               ciudad:
 *                 type: string
 *               comentarios:
 *                 type: string
 *               comoEscuchaste:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cliente actualizado exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Cliente no encontrado
 */
app.put('/api/clientes/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!cliente) {
      return res.status(404).send();
    }
    res.status(200).send(cliente);
  } catch (error) {
    res.status(400).send(error);
  }
});

/**
 * @swagger
 * /api/clientes/{id}:
 *   delete:
 *     summary: Elimina un cliente por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Cliente eliminado exitosamente
 *       404:
 *         description: Cliente no encontrado
 *       500:
 *         description: Error en el servidor
 */
app.delete('/api/clientes/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndDelete(req.params.id);
    if (!cliente) {
      return res.status(404).send();
    }
    res.status(200).send(cliente);
  } catch (error) {
    res.status(500).send(error);
  }
});

if (process.env.IS_PRODUCTION) {
  // Create HTTP server - hosting service add SSL/TLS
  app.listen(port, () => {
    console.log(`HTTP Server is running on ${baseUrl}:${port}`);
  });
} else {
  // Read SSL/TLS certificate and key
  const options = {
    key: fs.readFileSync('./../key.pem'),
    cert: fs.readFileSync('./../cert.pem')
  };

  // Create HTTPS server
  https.createServer(options, app).listen(port, () => {
    console.log(`HTTPS Server is running on ${baseUrl}:${port}`);
  });
}

