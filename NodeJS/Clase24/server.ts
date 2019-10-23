import express = require("express")
import { Request } from "express"
import * as http from "http"
import * as bodyParser from "body-parser"
import fs = require("fs")
import { RouterAlumnos, RouterUsuarios, RouterRoles } from "./routes"
import { inicializarBaseDatos } from "./services/database.service";
import { generalError, pathNotFound } from "./handlers/errors.handler"

const cluster = require("cluster")
//const cantidadCPU = 2

if (cluster.isMaster) {
	for (let i = 0; i < require("os").cpus().length / 2; i++) {
		cluster.fork()
	}
} else {

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
			app.use(bodyParser.urlencoded({ extended: true }))

			app.use(express.static("./public"))

			/* 		const mifuncion = directorio => {
						return (req, res, next) => {
							fs.exists(__dirname + "/"+ directorio + req.url, existe => {
								if (existe) {
									res.sendFile(__dirname + "/"+ directorio + req.url)
								} else {
									next()
								}
							})
						}
					}
					app.use(mifuncion("public")) */



			/* app.use((req, res, next) => {
				fs.exists(__dirname + "/public" + req.url, existe => {
					if (existe) {
						res.sendFile(__dirname + "/public" + req.url)
					} else {
						next()
					}
				})
			}) */

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
			app.use("/roles", RouterRoles)

			//app.use(pathNotFound)
			app.use("**", (req, res, next) => {
				res.sendFile(__dirname + "/public/index.html")
			})
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
}

