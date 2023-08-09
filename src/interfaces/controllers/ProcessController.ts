import { Router, Request, Response } from "express";
import { ProcessRepository } from "../repositories/ProcessRepository";
import { validate } from "../../application/services/validation";
import { registerProcessSchema } from "../../application/services/schemas";
import { Process } from "../../domain/entities/Process";
import { JwtAuth } from "../../application/services/JwtAuth";


export class ProcessController {
    private router: Router = Router();
    private static processRepository = new ProcessRepository();

    private register(req: Request, res: Response): Response {
        let { registerId, title, link, remetente, recipient, dateStart, dateEnd } = req.body;

        ProcessController
            .processRepository
                .register(
                    new Process(registerId, title, link, remetente, recipient, dateStart, dateEnd)
                );
        return res.status(201).json({ msg: 'ok', data: ProcessController.processRepository });
    }

    private findAll(req: Request, res: Response): Response {
        return res.status(200)
            .json({
                msg: 'ok',
                data: ProcessController.processRepository.findAll()
            });
    }

    public routers() {
        return this.router
            .post(
                '/api/process', 
                validate(registerProcessSchema), 
                new JwtAuth().validateToken, 
                this.register
            )
            .get(
                '/api/process', 
                new JwtAuth().validateToken, 
                this.findAll
            )
    }
}
