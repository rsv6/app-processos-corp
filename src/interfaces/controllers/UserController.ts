import { Router, Request, Response } from "express";
import { registerUserSchema } from "../../application/services/schemas";
import { validate } from "../../application/services/validation";
import { UserRepository  } from "../repositories/UserRepository";
import { User } from "../../domain/entities/User";
import { JwtAuth } from "../../application/services/JwtAuth";

export class UserController {
    private router: Router = Router();
    private static userRepository = new UserRepository();

    private async register(req: Request, res: Response): Promise<Response> {

        const {name, login, email, password} = req.body;
        
        let listNivel = req.user.nivel.split(",");

        if (listNivel.some(nivel => nivel != 'admin')) {
            return res.status(401).json({ msg: 'Method not authorized at user', data: null })
        }

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

    private async findAll(req: Request, res: Response): Promise<Response> {


        let listNivel = req.user.nivel.split(",");

        if (listNivel.some(nivel => nivel != 'admin')) {
            return res.status(401).json({ msg: 'Method not authorized at user', data: null })
        }

        // need to implement validation token of authorization for viewer all users: admin
        return res.status(200).json({ msg: "ok", data: await UserController.userRepository.findAll() })
    }

    private async update(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;
        const { data } = req.body;

        let result = await UserController.userRepository.updateOne(id, data);

        if (result == null) {
            return res.status(401).json({ msg: 'Error at tryng update', data: null })
        } else {

            return res.status(202).json({ msg: "Update with successfully", data: [] });
        }
    }

    private async delete(req: Request, res: Response): Promise<Response> {

        const { id } = req.params;

        let listNivel = req.user.nivel.split(",");

        if (listNivel.some(nivel => nivel != 'admin')) {
            return res.status(401).json({ msg: 'Method not authorized at user', data: null })
        }

        let result = await UserController.userRepository.deleteOne(id);

        if (result == null) {
            return res.status(401).json({ msg: 'Error at tryng delete', data: null })
        } else {
            return res.status(202).json({ msg: "Delete with successfully", data: [] });
        }
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
            .patch(
                '/api/user/:id',
                new JwtAuth().validateToken,
                this.update
            )
            .delete(
                '/api/user/:id',
                new JwtAuth().validateToken,
                this.delete
            )
            .get(
                '/api/user/signin', 
                this.signIn
            )
    }
}