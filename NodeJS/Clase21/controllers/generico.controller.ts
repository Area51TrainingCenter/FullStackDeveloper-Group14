import httpStatus = require("http-status-codes")

class GenericoController {

	constructor(private modelo: any) {
		this.listar = this.listar.bind(this)
		this.obtenerUno = this.obtenerUno.bind(this)
		this.insertar = this.insertar.bind(this)
		this.actualizar = this.actualizar.bind(this)
		this.eliminar = this.eliminar.bind(this)
	}

	async listar(req, res) {
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

	actualizar(req, res) {
		res
			.status(201)
			.json({
				status: 201,
				message: "Usuario actualizado"
			})
	}

	eliminar(req, res) {
		res
			.status(201)
			.json({
				status: 201,
				message: "Usuario eliminado"
			})
	}
}

export default GenericoController