const BaseController = require('./BaseController')
const SquareMeterService = require('../Services/SquareMeter')
const calculateImovelValue = require('../utils/calculateImovelValue')

class ImovelValueController extends BaseController {
	constructor() {
		super()
	}

	async execute(req, res) {
		new SquareMeterService()
			.getValue()
			.then((response) => {
				const { value } = response.data
				const { meters } = req.body
				const imovelValue = calculateImovelValue(meters, value)
				return this.ok(res, { imovelValue })
			})
			.catch((err) => {
				return this.fail(res, err)
			})
	}
}

module.exports = ImovelValueController
