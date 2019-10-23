import mongoose = require("mongoose")
import configDatabase = require("../config/database.config")


const inicializarBaseDatos = async () => {
	mongoose.Promise = global.Promise

	const promiseConnection = new Promise((resolve, reject) => {
		mongoose.connect(configDatabase.connectionString, {
			keepAlive: true,
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true
		})

		mongoose.connection.on("connected", () => {
			console.log("Conectado a Mongo")

			require("../models").Usuario
			require("../models").Rol

			resolve()
		})

		mongoose.connection.on("error", error => {
			console.log("Ocurrió un error")
			console.log(error)
			reject(error)
		})
	})

	await promiseConnection
}

export { inicializarBaseDatos }

