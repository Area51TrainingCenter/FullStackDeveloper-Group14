import express = require("express")
import { ControllerUsuarios } from "../controllers"

const Router = express.Router()
const controller = new ControllerUsuarios()

Router.get("/", controller.listar)
Router.get("/detalle", controller.obtenerUno)
Router.post("/", controller.insertar)
Router.put("/", controller.actualizar)
Router.delete("/", controller.eliminar)

export default Router