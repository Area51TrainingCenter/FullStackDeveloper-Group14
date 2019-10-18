import express = require("express")
import { ControllerUsuarios } from "../controllers"
import { catchAsync } from "../handlers/errors.handler"
import { authentication, authorization } from "../policies/security.policy";
import { upload } from "../handlers/file.handler";

const Router = express.Router()
const controller = new ControllerUsuarios()

Router.get("/", authentication, authorization("Admin", "Auditor"), catchAsync(controller.listar))
Router.get("/:_id", catchAsync(controller.obtenerUno))
Router.post("/", upload(), catchAsync(controller.insertar))
Router.post("/login", catchAsync(controller.login))
Router.put("/:_id", catchAsync(controller.actualizar))
Router.delete("/:_id", catchAsync(controller.eliminar))

export default Router