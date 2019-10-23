import httpStatus = require("http-status-codes")
import { validarToken } from "../services/token.service";

const authentication = (req, res, next) => {
	const authorization = req.headers["authorization"]

	if (authorization) {
		const parts = authorization.split(" ")

		if (parts.length == 2) {
			const token = parts[1]

			validarToken(token)
				.then((payload: any) => {
					//console.log(payload)
					res.locals = payload.roles
					next()
				})
				.catch(error => {
					res
						.status(error.status)
						.json(error)
				})
		} else {
			//Envió la cabecera pero no el token
			res
				.status(httpStatus.UNAUTHORIZED)
				.json({
					status: httpStatus.UNAUTHORIZED,
					message: "User is not logged"
				})
		}

	} else {
		//La petición no contiene la cabecera "authorization"
		res
			.status(httpStatus.UNAUTHORIZED)
			.json({
				status: httpStatus.UNAUTHORIZED,
				message: "User is not logged"
			})
	}
}

const authorization = (...rolesPermitidos) => {
	return (req, res, next) => {
		const rolesUsuario = res.locals.map(rol => rol.nombre)

		let permitido = false
		rolesUsuario.forEach(rol => {
			if (rolesPermitidos.indexOf(rol) > -1) permitido = true
		})

		if (permitido) {
			next()
		} else {
			res
				.status(httpStatus.FORBIDDEN)
				.json({
					status: httpStatus.FORBIDDEN,
					message: "Forbidden resource"
				})
		}
	}
}

export { authentication, authorization }