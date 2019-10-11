import { ControllerAlumnos } from '../controllers';
import express = require("express")
import { validador, esquemasAlumnos } from "../schemasValidators"

const Router = express.Router()
const controller = new ControllerAlumnos()


Router.get("/", controller.listar)
//@Validators(esquemasAlumnos.getAlumnosDetalle)
Router.get("/detalle/:id/:nivel", validador(esquemasAlumnos.getAlumnosDetalle), controller.obtenerUno)

Router.post("/", controller.insertar)
Router.put("/", controller.actualizar)
Router.delete("/", controller.eliminar)

export default Router