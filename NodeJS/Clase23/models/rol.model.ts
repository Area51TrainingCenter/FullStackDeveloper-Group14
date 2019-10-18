import mongoose = require("mongoose")

const esquema = new mongoose.Schema({
	nombre: {
		type: String,
		required: true,
		trim: true,
		unique: true
	}
})

const modelo = mongoose.model("Rol", esquema)

export default modelo