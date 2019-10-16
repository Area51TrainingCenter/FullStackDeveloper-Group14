import mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	nombre: String,
	apellido: String,
	correo: {
		type: String,
		email: true,
		required: true,
		size: 255,
		unique: true,
		lowercase: true
	},
	contrasena: {
		type: String,
		trim: true,
		required: true
	}
})

const modelo = mongoose.model("Usuario", esquema)

export default modelo