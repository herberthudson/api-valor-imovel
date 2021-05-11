const axios = require('axios')

class SquareMeterService {
	constructor() {}

	async getValue() {
		return axios.get('https://api-valor-metro-quadrado.herokuapp.com/')
	}
}

module.exports = SquareMeterService
