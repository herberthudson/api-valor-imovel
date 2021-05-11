class BaseController {
	async post(req, res) {
		try {
			await this.execute(req, res)
		} catch (err) {
			this.fail(res, 'An unexpected error occurred', 500)
		}
	}

	static jsonResponse(res, code, message) {
		res.status(code).json({ message })
	}

	ok(res, data) {
		if (data) {
			res.type('application/json')
			res.status(200).json(data)
		} else {
			res.sendStatus(200)
		}
	}

	fail(res, error, statusCode) {
		const code = statusCode ?? 500
		res.status(code).send(error.toString())
	}
}

module.exports = BaseController
