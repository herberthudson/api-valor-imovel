const { validateSquareMeters } = require('../../../utils/validate')
const expect = require('chai').expect

describe('Testing validate functions', () => {
	it('should be return valid number', () => {
		const numberValue = 1000
		const smallNumber = 9
		const bigNumber = 100000
		const isNumber = validateSquareMeters(numberValue)
		const itsSmallValidNumber = validateSquareMeters(smallNumber)
		const itsBigValidNumber = validateSquareMeters(bigNumber)

		expect(isNumber).to.be.true
		expect(itsSmallValidNumber).to.be.false
		expect(itsBigValidNumber).to.be.false
	})
})
