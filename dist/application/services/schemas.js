"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserSchema = exports.registerProcessSchema = void 0;
const zod_1 = require("zod");
exports.registerProcessSchema = zod_1.z.object({
    body: zod_1.z.object({
        registerId: zod_1.z.string().nullable(),
        titleDocument: zod_1.z.string().min(3),
        link: zod_1.z.string().nullable(),
        remetente: zod_1.z.string({
            invalid_type_error: "remetente precisa ser uma string",
        }).nonempty({
            message: "Requer pelo menos 1 caracter!"
        }),
        recipient: zod_1.z.string({
            invalid_type_error: "Recipient precisa ser uma string",
        }).nonempty({
            message: "Requer pelo menos 1 caracter!"
        }),
        dateStart: zod_1.z.string({
            invalid_type_error: "dateStart precisa ser uma string nesse formato: YYYY-MM-DD",
        }).min(10, {
            message: "Data precisa está nesse formato: YYYY-MM-DD"
        }),
        dateEnd: zod_1.z.string({
            invalid_type_error: "dateStart precisa ser uma string nesse formato: YYYY-MM-DD",
        }).min(10, {
            message: "Data precisa está nesse formato: YYYY-MM-DD"
        }),
    })
});
exports.registerUserSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: "Name precisa ser uma string!",
        }).min(3, {
            message: "Name requer pelo menos 3 caracteres!"
        }),
        login: zod_1.z.string({
            invalid_type_error: "Login precisa ser uma string!",
        }).min(3, {
            message: "Login requer pelo menos 3 caracteres!"
        }),
        email: zod_1.z.string({
            invalid_type_error: "Email precisa ser uma string"
        }).email({
            message: "Email precisa ser no formato de email!"
        }),
        password: zod_1.z.string({
            invalid_type_error: "Password precisa ser uma string!"
        }).min(6, {
            message: "O Password requer pelo menos 6 caracteres!"
        })
    })
});
