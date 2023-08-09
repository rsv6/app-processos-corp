import { Request, Response, NextFunction } from 'express';
import { z, Schema } from 'zod';

export const registerProcessSchema = z.object({
    body: z.object({
        registerId: z.string().nullable(),
        titleDocument: z.string().min(3),
        link: z.string().nullable(),
        remetente: z.string({
            invalid_type_error: "remetente precisa ser uma string",
        }).nonempty({
            message: "Requer pelo menos 1 caracter!"
        }),
        recipient: z.string({
            invalid_type_error: "Recipient precisa ser uma string",
        }).nonempty({
            message: "Requer pelo menos 1 caracter!"
        }),
        dateStart: z.string({
            invalid_type_error: "dateStart precisa ser uma string nesse formato: YYYY-MM-DD",
        }).min(10, {
            message: "Data precisa está nesse formato: YYYY-MM-DD"
        }),
        dateEnd: z.string({
            invalid_type_error: "dateStart precisa ser uma string nesse formato: YYYY-MM-DD",
        }).min(10, {
            message: "Data precisa está nesse formato: YYYY-MM-DD"
        }),
    })
});

export const registerUserSchema = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: "Name precisa ser uma string!",
        }).min(3, {
            message: "Name requer pelo menos 3 caracteres!"
        }),
        login: z.string({
            invalid_type_error: "Login precisa ser uma string!",
        }).min(3, {
            message: "Login requer pelo menos 3 caracteres!"
        }),
        email: z.string({
            invalid_type_error: "Email precisa ser uma string"
        }).email({
            message: "Email precisa ser no formato de email!"
        }),
        password: z.string({
            invalid_type_error: "Password precisa ser uma string!"
        }).min(6, {
            message: "O Password requer pelo menos 6 caracteres!"
        })
    })
})