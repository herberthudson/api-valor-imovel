const { Router } = require('express')
const ImovelValueController = require('../Controllers/ImovelValueController')

const imovelValueRouter = Router()
const imovelValue = new ImovelValueController()
/**
 * @swagger
 * components:
 *   schemas:
 *     ImovelResponse:
 *       type: object
 *       required:
 *         - imovelValue
 *       properties:
 *         imovelValue:
 *           type: number
 *           description: imovel imovelValue
 *       example:
 *         imovelValue: 10000
 *     ImovelBody:
 *       type: object
 *       required:
 *         - meters
 *       properties:
 *         meters:
 *           type: number
 *           description: imovel meters
 *       example:
 *         meters: 12345
 */

/**
 * @swagger
 * tags:
 *   name: Imovel
 *   description: The Imovel value managing API
 */

/**
 * @swagger
 * /:
 *   post:
 *     summary: Returns imovel value
 *     tags: [Imovel]
 *     parameters:
 *       - in: path
 *         name: meters
 *         schema:
 *           type: number
 *         required: true
 *         description: square meters imovel
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ImovelBody'
 *     responses:
 *       200:
 *         description: The square meter object with value
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 ImovelValue: 10000
 *               items:
 *                 $ref: '#/components/schemas/ImovelResponse'
 */
imovelValueRouter.post('/', (req, res) => imovelValue.post(req, res))

module.exports = imovelValueRouter
