const express = require('express')
const imovelValueRouter = require('./Routes')
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'ValorImovel API',
			version: '1.0.0',
			description:
				'A simple Express Library API to calculate imovel value',
		},
		servers: [
			{
				url: 'http://localhost:4000',
			},
		],
	},
	apis: ['./src/Routes/index.js'],
}

const specs = swaggerJsDoc(options)

const app = express()
app.use(express.json())
const port = process.env.PORT || 4000

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))

app.use('/', imovelValueRouter)
app.listen(port)

module.exports = app
