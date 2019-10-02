import express = require("express")
import { Request } from "express"
import * as http from "http"
import { RouterAlumnos, RouterUsuarios } from "./routes"

let httpServer: http.Server
let app = express()

interface RequestApp extends Request {
	estaAutenticado?: boolean
}

const inicializar = (): Promise<any> => {
	return new Promise((resolve, reject) => {
		httpServer = http.createServer(app)

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

		httpServer.listen(3000)
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
}

iniciar()


