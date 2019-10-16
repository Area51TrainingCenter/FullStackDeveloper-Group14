import httpStatus = require("http-status-codes")

class GenericoController {

	constructor(private modelo: any) {
		this.listar = this.listar.bind(this)
		this.obtenerUno = this.obtenerUno.bind(this)
		this.insertar = this.insertar.bind(this)
		this.actualizar = this.actualizar.bind(this)
		this.eliminar = this.eliminar.bind(this)
	}

	async listar(req, res, next) {
		const results = await this.modelo.find()

		res
			.status(httpStatus.OK)
			.json({
				status: httpStatus.OK,
				message: "List",
				results
			})
	}

	async obtenerUno(req, res) {
		const data = req.params // {_id: 'ccccc'}

		const result = await this.modelo.findOne(data)

		res
			.status(httpStatus.OK)
			.json({
				status: httpStatus.OK,
				message: "Document",
				result
			})

	}

	async insertar(req, res) {
		const data = req.body

		const usuario = new this.modelo(data)
		await usuario.save()

		res
			.status(httpStatus.CREATED)
			.json({
				status: httpStatus.CREATED,
				message: "Usuario agregado"
			})
	}

	async actualizar(req, res) {
		const params = req.params // {_id: "dddd"}
		const body = req.body

		await this.modelo.findOneAndUpdate(params, body)

		res
			.status(httpStatus.CREATED)
			.json({
				status: httpStatus.CREATED,
				message: "Document updated"
			})
	}

	async eliminar(req, res) {
		const params = req.params

		await this.modelo.findOneAndRemove(params)

		res
			.status(httpStatus.CREATED)
			.json({
				status: httpStatus.CREATED,
				message: "Document deleted"
			})
	}
}

export default GenericoController