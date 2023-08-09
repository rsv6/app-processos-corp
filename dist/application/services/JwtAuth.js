"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtAuth {
    generateAcessToken(user) {
        return jsonwebtoken_1.default.sign(user, String(process.env.TOKEN_SECRET), {
            expiresIn: '1800s'
        });
    }
}
exports.JwtAuth = JwtAuth;
