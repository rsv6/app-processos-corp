"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouters = void 0;
const express_1 = require("express");
const UserController_1 = require("./UserController");
const ProcessController_1 = require("./ProcessController");
class AppRouters {
    constructor() {
        this.router = (0, express_1.Router)();
        this.user = new UserController_1.UserController();
    }
    start() {
        return this.router
            .use(new ProcessController_1.ProcessController().routers())
            .use(this.user.routers());
    }
}
exports.AppRouters = AppRouters;
