import express = require("express")
import { ControllerRoles } from "../controllers"
import { catchAsync } from "../handlers/errors.handler"

const Router = express.Router()
const controller = new ControllerRoles()

Router.get("/", catchAsync(controller.listar))
Router.get("/:_id", catchAsync(controller.obtenerUno))
Router.post("/", catchAsync(controller.insertar))
Router.put("/:_id", catchAsync(controller.actualizar))
Router.delete("/:_id", catchAsync(controller.eliminar))

export default Router