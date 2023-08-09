import { Router, Request, Response } from "express";
import { registerUserSchema } from "../../application/services/schemas";
import { validate } from "../../application/services/validation";
import { UserRepositoy  } from "../repositories/UserRepository";
import { User } from "../../domain/entities/User";

export class UserController {
    private router: Router = Router();
    private static userRepository = new UserRepositoy();

    private register(req: Request, res: Response): Response {

        const {name, login, email, password} = req.body;

        UserController.userRepository.register(new User(name, login, email, password))

        return res.status(200).json({ msg: 'ok', data: [req.body] })
    }

    private signIn(req: Request, res: Response): Response {

        const {login, password} = req.body;

        let token = UserController.userRepository.signIn(login, password);

        if (!token) {
            return res.status(401).json({ msg: "Unauthorized", data: [] });
        }

        return res.status(200).json({ msg: "SignIn Succefully", data: token })
    }

    private findAll(req: Request, res: Response): Response {
        return res.status(200)
            .json({ 
                msg: 'ok', 
                data: UserController.userRepository.findAll() 
            })
    }

    public routers(){
        return this.router
            .get('/api/user/signin', this.signIn)
            .post('/api/user', validate(registerUserSchema), this.register)
            .get('/api/user', this.findAll)
    }
}