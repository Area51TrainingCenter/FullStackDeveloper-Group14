import { ControllerAlumnos } from '../controllers';
import express = require("express")

const Router = express.Router()
const controller = new ControllerAlumnos()

Router.get("/", controller.listar)
Router.get("/detalle/:id/:nivel", controller.obtenerUno)
Router.post("/", controller.insertar)
Router.put("/", controller.actualizar)
Router.delete("/", controller.eliminar)

export default Router