//import express from "express"
import * as http from "http"

let httpServer: http.Server

const inicializar = (): Promise<any> => {
	return new Promise((resolve, reject) => {
		httpServer = http.createServer((req, res) => {
			res.writeHead(200, { "content-type": "text/html" })
			res.write("<h1>Hola, que tal</h1>")
			res.write("<br>Todo ok por casa")
			res.write("<br>La ruta es " + req.url)
			res.end("<p>Por favor abre la puerta</p>")
		})

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


