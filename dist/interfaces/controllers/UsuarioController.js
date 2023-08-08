"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const express_1 = require("express");
const UsuarioRepository_1 = require("../repositories/UsuarioRepository");
class UsuarioController {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    cadastraUsuario(req, res) {
        return res.status(200).json({ msg: 'ok', data: [] });
    }
    recuperarUsuarios(req, res) {
        return res.status(200).json({ msg: 'ok', data: UsuarioController.usuarioRepository.recuperarUsuarios() });
    }
    routers() {
        return this.router
            .post('/api/usuario', this.cadastraUsuario)
            .get('/api/usuario', this.recuperarUsuarios);
    }
}
exports.UsuarioController = UsuarioController;
UsuarioController.usuarioRepository = new UsuarioRepository_1.UsuarioRepositoy();
