"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GenericoController {
    constructor(modelo) {
        this.modelo = modelo;
    }
    listar(req, res) {
        res.type("application/json").send({ name: "Fullstack", ruta: req.url, modelo: this.modelo });
    }
    obtenerUno(req, res) {
        res.type("application/json").send({ name: "Fullstack Detalle", ruta: req.url });
    }
    insertar(req, res) {
        res
            .status(201)
            .json({
            status: 200,
            message: "Usuario agregado"
        });
    }
    actualizar(req, res) {
        res
            .status(201)
            .json({
            status: 201,
            message: "Usuario actualizado"
        });
    }
    eliminar(req, res) {
        res
            .status(201)
            .json({
            status: 201,
            message: "Usuario eliminado"
        });
    }
}
exports.default = GenericoController;
//# sourceMappingURL=generico.controller.js.map