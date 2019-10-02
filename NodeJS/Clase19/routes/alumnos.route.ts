import { ControllerAlumnos } from '../controllers';
import express = require("express")
import * as Joi from "@hapi/joi"

const Router = express.Router()
const controller = new ControllerAlumnos()

Router.get("/", controller.listar)
Router.get("/detalle/:id/:nivel", (req, res, next) => {
	const esquemas = {
		params: Joi.object().keys({
			id: Joi.number(),
			nivel: Joi.string().regex(/^[a-zA-Z]{2}[0-9]{4,10}$/)
		}),

		query: Joi.object().keys({
			titulo: Joi.string().regex(/^[A-Z]{4,}$/).required()
		})
	}

	let valido

	["params", "query"].forEach(el => {
		if (esquemas[el] && (!valido || !valido.error)) {
			valido = esquemas[el].validate(req[el])
		}
	})

	if (valido.error) return res.status(422).json(valido.error.details)

	next()


	/* 	const validoURL = esquemas.params.validate(req.params)
		if (validoURL.error) return res.status(422).json(validoURL.error.details)
	
		const validoQuery = esquemas.query.validate(req.query)
		if (validoQuery.error) return res.status(422).json(validoQuery.error.details)
	
		next() */

	/* const esquema = Joi.object().keys({
		id: Joi.number().min(18).max(50),
		nivel: Joi.string().regex(/^[a-zA-Z]+[0-9]{3,8}$/)
	}) */

	/* 	const esquema = Joi.object().keys({
			nombre: Joi.string().required(),
			titulo: Joi.string(),
			correo: Joi.string().email().required()
		}) */

	/* 	const esquemaCabecera = Joi.object().keys({
			authorization: Joi.string().min(30).regex(/^Bearer\s[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/).required()
		})
	
		const esquemaCuerpo = Joi.object().keys({
			nombre: Joi.string().required(),
			apellidoPaterno: Joi.string().required(),
			apellidoMaterno: Joi.string()
		}) */

	//console.log(req.headers)

	//const valido = Joi.validate(req.params, esquema)
	//const valido = esquema.validate(req.params)
	//const valido = esquema.validate(req.query)
	//const valido = esquemaCabecera.validate(req.headers)
	/* 	console.log(req.body)
		const valido = esquemaCuerpo.validate(req.body) */
	//console.log(valido)
	/* 	if (valido.error) return res.status(422).json(valido.error.details)
	
		next() */
}, controller.obtenerUno)


Router.post("/", controller.insertar)
Router.put("/", controller.actualizar)
Router.delete("/", controller.eliminar)

export default Router