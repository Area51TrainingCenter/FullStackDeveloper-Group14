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
			.status(200)
			.json({
				status: 200,
				message: "List",
				results
			})
	}

	obtenerUno(req, res) {
		const _id = req.params._id

	}

	async insertar(req, res) {
		const data = req.body

		const usuario = new this.modelo(data)
		await usuario.save()

		res
			.status(201)
			.json({
				status: 200,
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