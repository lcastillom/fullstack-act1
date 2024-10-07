const express = require('express');
const Destino = require('./models/Destino'); // Importa el modelo Destino
const router = express.Router();

/**
 * @swagger
 * /api/destinos:
 *   get:
 *     summary: Obtiene todos los destinos
 *     responses:
 *       200:
 *         description: Lista de destinos
 */
router.get('/destinos', async (req, res) => {
  try {
    const destinos = await Destino.findAll();
    res.status(200).json(destinos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * @swagger
 * /api/destinos/{id}:
 *   get:
 *     summary: Obtiene un destino por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Destino encontrado
 *       404:
 *         description: Destino no encontrado
 */
router.get('/destinos/:id', async (req, res) => {
  try {
    const destino = await Destino.findByPk(req.params.id);
    if (!destino) {
      return res.status(404).json({ message: 'Destino no encontrado' });
    }
    res.status(200).json(destino);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/**
 * @swagger
 * /api/destinos:
 *   post:
 *     summary: Crea un nuevo destino
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *     responses:
 *       201:
 *         description: Destino creado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/destinos', async (req, res) => {
  try {
    const destino = await Destino.create(req.body);
    res.status(201).json(destino);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * @swagger
 * /api/destinos/{id}:
 *   put:
 *     summary: Actualiza un destino por ID
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
 *               nombre:
 *                 type: string
 *     responses:
 *       200:
 *         description: Destino actualizado exitosamente
 *       400:
 *         description: Error en la solicitud
 *       404:
 *         description: Destino no encontrado
 */
router.put('/destinos/:id', async (req, res) => {
  try {
    const destino = await Destino.findByPk(req.params.id);
    if (!destino) {
      return res.status(404).json({ message: 'Destino no encontrado' });
    }
    await destino.update(req.body);
    res.status(200).json(destino);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * @swagger
 * /api/destinos/{id}:
 *   delete:
 *     summary: Elimina un destino por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Destino eliminado exitosamente
 *       404:
 *         description: Destino no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.delete('/destinos/:id', async (req, res) => {
  try {
    const destino = await Destino.findByPk(req.params.id);
    if (!destino) {
      return res.status(404).json({ message: 'Destino no encontrado' });
    }
    await destino.destroy();
    res.status(200).json({ message: 'Destino eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;