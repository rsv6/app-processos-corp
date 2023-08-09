import { ExecException } from 'child_process';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export class JwtAuth {
    
    generateAcessToken(user: Object) {
        return jwt.sign(
            user, 
            String(process.env.TOKEN_SECRET),
            {
                expiresIn: '1800s'
            }    
        )
    }

    validateToken(req: Request, res: Response, next: NextFunction) {
        
        const authorization = req.headers.authorization || req.headers['authorization'];

        const token = authorization?.split(' ')[1];

        if (token == null) return res.status(401).json({ msg: "Unauthorized: Bearer token is missing!"});

        jwt.verify(
            token as string,
            process.env.TOKEN_SECRET as string,
            (err: any, user: any) => {
                if (err) return res.status(401).json({ msg: "Unauthorized: token bad formated!"});

                req.user = user;
                return next();
            }
        )
    }
}