"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const controllers_1 = require("../controllers");
const Router = express.Router();
const controller = new controllers_1.ControllerUsuarios();
Router.get("/", controller.listar);
Router.get("/detalle", controller.obtenerUno);
Router.post("/", controller.insertar);
Router.put("/", controller.actualizar);
Router.delete("/", controller.eliminar);
exports.default = Router;
//# sourceMappingURL=usuarios.route.1.js.map