"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepositoy = void 0;
const mock_1 = require("../../adapters/database/mock");
class UsuarioRepositoy {
    constructor() {
        this.usuariosMock = mock_1.usuarios;
    }
    adicionarUsuario(usuario) {
        UsuarioRepositoy.ListaUsuarios.push(usuario);
    }
    recuperarUsuarios() {
        UsuarioRepositoy.ListaUsuarios.push(...this.usuariosMock);
        return UsuarioRepositoy.ListaUsuarios;
    }
}
exports.UsuarioRepositoy = UsuarioRepositoy;
UsuarioRepositoy.ListaUsuarios = [];
