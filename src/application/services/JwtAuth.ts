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


}