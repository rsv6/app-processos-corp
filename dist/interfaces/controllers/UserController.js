"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const express_1 = require("express");
const schemas_1 = require("../../application/services/schemas");
const validation_1 = require("../../application/services/validation");
const UserRepository_1 = require("../repositories/UserRepository");
const User_1 = require("../../domain/entities/User");
class UserController {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    register(req, res) {
        const { name, login, email, password } = req.body;
        UserController.userRepository.register(new User_1.User(name, login, email, password));
        return res.status(200).json({ msg: 'ok', data: [req.body] });
    }
    signIn(req, res) {
        const { login, password } = req.body;
        let token = UserController.userRepository.signIn(login, password);
        if (!token) {
            return res.status(401).json({ msg: "Unauthorized", data: [] });
        }
        return res.status(200).json({ msg: "SignIn Succefully", data: token });
    }
    findAll(req, res) {
        return res.status(200)
            .json({
            msg: 'ok',
            data: UserController.userRepository.findAll()
        });
    }
    routers() {
        return this.router
            .get('/api/user/signin', this.signIn)
            .post('/api/user', (0, validation_1.validate)(schemas_1.registerUserSchema), this.register)
            .get('/api/user', this.findAll);
    }
}
exports.UserController = UserController;
UserController.userRepository = new UserRepository_1.UserRepositoy();
