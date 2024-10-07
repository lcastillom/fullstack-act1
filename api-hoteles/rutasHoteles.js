const express = require('express');
const Hotel = require('./models/Hotel'); // Importa el modelo Hotel
const router = express.Router();

/**
 * @swagger
 * /api/hoteles:
 *   get:
 *     summary: Obtiene todos los hoteles o filtra por destinoId
 *     parameters:
 *       - in: query
 *         name: destinoId
 *         schema:
 *           type: integer
 *         description: ID del destino para filtrar los hoteles
 *     responses:
 *       200:
 *         description: Lista de hoteles
 */
router.get('/hoteles', async (req, res) => {
  try {
    const { destinoId } = req.query;
    const whereClause = destinoId ? { destinoId } : {};
    const hoteles = await Hotel.findAll({ where: whereClause });
    res.status(200).json(hoteles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * @swagger
 * /api/hoteles/{id}:
 *   get:
 *     summary: Obtiene un hotel por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Hotel encontrado
 *       404:
 *         description: Hotel no encontrado
 */
router.get('/hoteles/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findByPk(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel no encontrado' });
    }
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * @swagger
 * /api/hoteles:
 *   post:
 *     summary: Crea un nuevo hotel
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               destinoId:
 *                 type: integer
 *               nombre:
 *                 type: string
 *               caracteristicas:
 *                 type: string
 *               precioNocheMin:
 *                 type: number
 *               precioNocheMax:
 *                 type: number
 *               contacto:
 *                 type: string
 *     responses:
 *       201:
 *         description: Hotel creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/hoteles', async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.status(201).json(hotel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * @swagger
 * /api/hoteles/{id}:
 *   put:
 *     summary: Actualiza un hotel por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               destinoId:
 *                 type: integer
 *               nombre:
 *                 type: string
 *               caracteristicas:
 *                 type: string
 *               precioNocheMin:
 *                 type: number
 *               precioNocheMax:
 *                 type: number
 *               contacto:
 *                 type: string
 *     responses:
 *       200:
 *         description: Hotel actualizado exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Hotel no encontrado
 */
router.put('/hoteles/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findByPk(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel no encontrado' });
    }
    await hotel.update(req.body);
    res.status(200).json(hotel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * @swagger
 * /api/hoteles/{id}:
 *   delete:
 *     summary: Elimina un hotel por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Hotel eliminado exitosamente
 *       404:
 *         description: Hotel no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.delete('/hoteles/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findByPk(req.params.id);
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel no encontrado' });
    }
    await hotel.destroy();
    res.status(200).json({ message: 'Hotel eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;