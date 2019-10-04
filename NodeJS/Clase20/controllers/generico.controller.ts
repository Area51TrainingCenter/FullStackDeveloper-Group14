class GenericoController {

	constructor(private modelo: any) {
		this.listar = this.listar.bind(this)
		this.obtenerUno = this.obtenerUno.bind(this)
		this.insertar = this.insertar.bind(this)
		this.actualizar = this.actualizar.bind(this)
		this.eliminar = this.eliminar.bind(this)
	}

	listar(req, res) {
		res.type("application/json").send({ name: "Fullstack", ruta: req.url, modelo: this.modelo })
	}

	obtenerUno(req, res) {
		console.log(req.params)
		res.type("application/json").send({ name: "Fullstack Detalle", ruta: req.url })
	}

	insertar(req, res) {
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