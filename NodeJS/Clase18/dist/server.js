"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const usuarios_route_1 = require("./routes/usuarios.route");
let httpServer;
let app = express();
const inicializar = () => {
    return new Promise((resolve, reject) => {
        httpServer = http.createServer(app);
        app.use("/users", (req, res, next) => {
            req.estaAutenticado = true;
            //res.json({ status: 401, message: "Usuario no logueado" })
            next();
        });
        app.use("/users", (req, res) => {
            res.json({ status: 409, message: "El usuario no tiene permiso" });
        });
        app.use("/usuarios", usuarios_route_1.default);
        httpServer.listen(3000)
            .on("listening", () => resolve())
            .on("error", err => reject(err));
    });
};
const iniciar = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Iniciando servidor");
        yield inicializar();
        console.log("Servidor ejecutándose");
    }
    catch (error) {
        console.log("Ocurrió un error");
        console.log(error);
    }
});
iniciar();
//# sourceMappingURL=server.js.map