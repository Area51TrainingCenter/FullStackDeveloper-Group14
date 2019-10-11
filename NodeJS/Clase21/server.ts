import express = require("express")
import { Request } from "express"
import * as http from "http"
import * as bodyParser from "body-parser"
import { RouterAlumnos, RouterUsuarios } from "./routes"
import { inicializarBaseDatos } from "./services/database.service";
import { generalError, pathNotFound } from "./handlers/errors.handler"

const yenv = require("yenv")
const env = yenv()

let httpServer: http.Server
let app = express()

interface RequestApp extends Request {
	estaAutenticado?: boolean
}

const inicializar = (): Promise<any> => {
	return new Promise((resolve, reject) => {
		httpServer = http.createServer(app)

		app.use(bodyParser.json())
		app.use(bodyParser.urlencoded({ extended: false }))

		app.use("/users", (req: RequestApp, res, next) => {
			req.estaAutenticado = true
			//res.json({ status: 401, message: "Usuario no logueado" })
			next()
		})

		app.use("/users", (req, res) => {
			res.json({ status: 409, message: "El usuario no tiene permiso" })
		})

		app.use("/usuarios", RouterUsuarios)
		app.use("/alumnos", RouterAlumnos)

		app.use(pathNotFound)
		app.use(generalError)

		httpServer.listen(env.PORT)
			.on("listening", () => resolve())
			.on("error", err => reject(err))
	})
}

const iniciar = async () => {
	try {
		console.log("Iniciando servidor")
		await inicializar()
		console.log("Servidor ejecutándose")
	} catch (error) {
		console.log("Ocurrió un error")
		console.log(error)
	}

	try {
		console.log("Iniciando conexión con MongoDB")
		await inicializarBaseDatos()
		console.log("Conexión exitosa a MongoDB")
	} catch (error) {
		console.log("Error de conexión")
		console.log(error)
	}
}

iniciar()


