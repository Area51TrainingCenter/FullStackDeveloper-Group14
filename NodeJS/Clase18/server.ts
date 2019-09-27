import express = require("express")
import * as http from "http"

let httpServer: http.Server
let app = express()

const inicializar = (): Promise<any> => {
	return new Promise((resolve, reject) => {
		httpServer = http.createServer(app)

		app.get("/usuarios", (req, res) => {
			res.type("application/json").send({ name: "Fullstack" })
		})

		/* 		httpServer = http.createServer((req, res) => {
					res.writeHead(200, { "content-type": "text/html" })
					res.write("<h1>Hola, que tal</h1>")
					res.write("<br>Todo ok por casa")
					res.write("<br>La ruta es " + req.url)
					res.write("<br>Método usado " + req.method)
					if (req.url == "/usuarios" && req.method == "GET") {
						res.write("<br>Lista de usuarios")
					}
					res.end("<p>Por favor abre la puerta</p>")
				}) */

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


