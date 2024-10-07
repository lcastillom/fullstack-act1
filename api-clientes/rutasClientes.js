const express = require('express');
const Cliente = require('./models/cliente'); // Importa el modelo de Cliente

const router = express.Router();

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
router.post('/clientes', async (req, res) => {
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
router.get('/clientes', async (req, res) => {
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
router.get('/clientes/:id', async (req, res) => {
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
router.put('/clientes/:id', async (req, res) => {
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
router.delete('/clientes/:id', async (req, res) => {
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

module.exports = router;