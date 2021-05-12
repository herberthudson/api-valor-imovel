function validateMiddleware(req, res, next) {
	const { meters } = req.body
	if (!validateSquareMeters(meters))
		return res
			.status(400)
			.json({
				message:
					'Bad Request, meters should be a number between 10 and 10000',
			})

	next()
}

function validateSquareMeters(meters) {
	const isNumber = typeof meters === 'number'
	const isValidRanger = meters >= 10 && meters <= 10000

	return isNumber && isValidRanger
}

module.exports = { validateMiddleware, validateSquareMeters }
