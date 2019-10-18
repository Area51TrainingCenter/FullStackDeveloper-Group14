const jwt = require("jwt-simple")
const moment = require("moment")
const yenv = require("yenv")
const env = yenv()
import httpStatus = require("http-status-codes")

const crearToken = (_id, roles) => {
	const payload = {
		_id,
		roles,
		iat: moment().unix(),    // Date.now()
		exp: moment().add(60, "seconds").unix()
	}

	const token = jwt.encode(payload, env.KEY_SECRET)

	return token
}

const validarToken = token => {
	return new Promise((resolve, reject) => {
		try {
			const payload = jwt.decode(token, env.KEY_SECRET)
			resolve(payload)
		} catch (error) {
			reject({
				status: httpStatus.UNAUTHORIZED,
				message: error.message
			})
		}
	})
}

export { crearToken, validarToken }