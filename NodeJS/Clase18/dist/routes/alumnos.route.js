"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const express = require("express");
const Router = express.Router();
const controller = new controllers_1.ControllerAlumnos();
Router.get("/", controller.listar);
Router.get("/detalle", controller.obtenerUno);
Router.post("/", controller.insertar);
Router.put("/", controller.actualizar);
Router.delete("/", controller.eliminar);
exports.default = Router;
//# sourceMappingURL=alumnos.route.js.map