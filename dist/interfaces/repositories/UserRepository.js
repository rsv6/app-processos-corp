"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoy = void 0;
const mock_1 = require("../../adapters/database/mock");
const JwtAuth_1 = require("../../application/services/JwtAuth");
class UserRepositoy {
    register(user) {
        UserRepositoy.ListUsers.push(user);
        return true;
    }
    signIn(login, password) {
        let users = this.findAll().some(user => user.login == login && user.password == password);
        console.log("User: ", users);
        if (!users)
            return null;
        const token = new JwtAuth_1.JwtAuth().generateAcessToken({ login, password });
        console.log("Token: ", token);
        if (!token) {
            return null;
        }
        return token;
    }
    findAll() {
        UserRepositoy.ListUsers.push(...UserRepositoy.usuariosMock);
        return UserRepositoy.ListUsers;
    }
}
exports.UserRepositoy = UserRepositoy;
UserRepositoy.ListUsers = [];
UserRepositoy.usuariosMock = mock_1.userMock;
