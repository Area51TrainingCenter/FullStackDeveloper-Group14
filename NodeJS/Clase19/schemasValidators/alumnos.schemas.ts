import * as Joi from "@hapi/joi"

const esquemas = {
	getAlumnosDetalle: {
		params: Joi.object().keys({
			id: Joi.number(),
			nivel: Joi.string().regex(/^[a-zA-Z]{2}[0-9]{4,10}$/)
		}),

		query: Joi.object().keys({
			titulo: Joi.string().regex(/^[A-Z]{4,}$/).required()
		})
	}
}

export default esquemas