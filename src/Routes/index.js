const { Router } = require('express')

const imovelValueRouter = Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     SquareMeter:
 *       type: object
 *       required:
 *         - value
 *       properties:
 *         value:
 *           type: string
 *           description: square meter value
 *       example:
 *         value: 10000
 */

/**
 * @swagger
 * tags:
 *   name: SquareMeter
 *   description: The SquareMeter managing API
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Returns square meter value
 *     tags: [SquareMeter]
 *     responses:
 *       200:
 *         description: The square meter object with value
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               example:
 *                 value: 10000
 *               items:
 *                 $ref: '#/components/schemas/SquareMeter'
 */
imovelValueRouter.post('/', (req, res) => res.json('Hello World'))

module.exports = imovelValueRouter
