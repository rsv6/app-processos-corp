"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouters = void 0;
const express_1 = require("express");
const UsuarioController_1 = require("./UsuarioController");
class AppRouters {
    constructor() {
        this.router = (0, express_1.Router)();
        this.usuario = new UsuarioController_1.UsuarioController();
    }
    start() {
        return this.router
            .use(this.usuario.routers());
    }
}
exports.AppRouters = AppRouters;
