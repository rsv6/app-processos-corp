"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const express_2 = require("../adapters/express");
const controllers_1 = require("../interfaces/controllers");
class Server {
    constructor() {
        this.app = new express_2.App().start();
    }
    bootStart() {
        this.init();
    }
    init() {
        this.app.use(express_1.default.urlencoded({ extended: true }), express_1.default.json());
        this.setRoutes();
        this.app.listen(8085, () => {
            console.log("Server running on port 8085");
        });
    }
    setRoutes() {
        this.app.use(new controllers_1.AppRouters().start());
    }
    getApp() {
        return this.app;
    }
}
exports.Server = Server;
