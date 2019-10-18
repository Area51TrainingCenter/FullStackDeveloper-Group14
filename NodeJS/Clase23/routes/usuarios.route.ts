import express = require("express")
import { ControllerUsuarios } from "../controllers"
import { catchAsync } from "../handlers/errors.handler"
import { authentication } from "../policies/security.policy";

const Router = express.Router()
const controller = new ControllerUsuarios()

Router.get("/", authentication, catchAsync(controller.listar))
Router.get("/:_id", catchAsync(controller.obtenerUno))
Router.post("/", catchAsync(controller.insertar))
Router.post("/login", catchAsync(controller.login))
Router.put("/:_id", catchAsync(controller.actualizar))
Router.delete("/:_id", catchAsync(controller.eliminar))

export default Router