import { Router, Request, Response } from "express";
import { UserRepositoy  } from "../repositories/UserRepository";

export class UserController {
    private router: Router = Router();
    private static userRepository = new UserRepositoy();

    private register(req: Request, res: Response): Response {
        return res.status(200).json({ msg: 'ok', data: [] })
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
            .post('/api/user', this.register)
            .get('/api/user', this.findAll)
    }
}