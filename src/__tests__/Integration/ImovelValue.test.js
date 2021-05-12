const app = require('../../index')
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect

chai.use(chaiHttp)

describe('Testing response', () => {
	const data = { meters: 1234 }
	it('should be return imovel value', () => {
		chai.request(app)
			.post('/')
			.send(data)
			.end((err, res) => {
				expect(res.status).to.equal(200)
				expect(res.body.imovelValue).to.equal(12340000)
			})
	})

	it('should be return bad request', () => {
		const invalidData = { meters: 9 }
		chai.request(app)
			.post('/')
			.send(invalidData)
			.end((err, res) => {
				expect(res.status).to.equal(400)
			})
	})
})
