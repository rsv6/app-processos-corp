import { Router, Request, Response } from "express";
import { registerUserSchema } from "../../application/services/schemas";
import { validate } from "../../application/services/validation";
import { UserRepositoy  } from "../repositories/UserRepository";
import { User } from "../../domain/entities/User";
import { JwtAuth } from "../../application/services/JwtAuth";

export class UserController {
    private router: Router = Router();
    private static userRepository = new UserRepositoy();

    private async register(req: Request, res: Response): Promise<Response> {

        const {name, login, email, password} = req.body;

        if (!await UserController.userRepository.register(new User(name, login, email, password))) {
            return await res.status(409).json({ msg: 'User already exist!!!' })
        }

        return await res.status(201).json({ 
            msg: 'User created with successfully!!!', 
            data: { 
                login: req.body.login 
                } 
            });
    }

    private async signIn(req: Request, res: Response): Promise<Response> {

        const {login, password} = req.body;

        const token = await UserController.userRepository.signIn(login, password);

        if (!token) {
            return await res.status(401).json({ msg: "Unauthorized", data: [] });
        }

        return await res.status(200).json({ msg: "SignIn Successfully", data: token })
    }

    private findAll(req: Request, res: Response): Response {
        
        return res.status(200)
            .json({ 
                msg: 'ok', 
                data: UserController.userRepository.findAll() 
            });
    }

    public routers(){
        return this.router
            .get(
                '/api/user', 
                new JwtAuth().validateToken,
                this.findAll
            )
            .post(
                '/api/user', 
                validate(registerUserSchema),
                new JwtAuth().validateToken, 
                this.register
            )
            .get(
                '/api/user/signin', 
                this.signIn
            )
    }
}