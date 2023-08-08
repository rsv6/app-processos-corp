import { Router, Request, Response } from "express";
import { ProcessRepository } from "../repositories/ProcessRepository";
import { Validation } from "../../application/services/Validation";
import { Process } from "../../domain/entities/Process";


export class ProcessController {
    private router: Router = Router();
    private static processRepository = new ProcessRepository();

    private register(req: Request, res: Response): Response {
        let { registerId, title, link, remetente, recipient, dateStart, dateEnd } = req.body;

        // if (!Validation.checkReqProcess(title, link, remetente, recipient, dateStart, dateEnd)) {
        //     return res.status(401).json({ msg: "failed", data: [] });
        // }

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
            })
    }

    public routers() {
        return this.router
            .post('/api/process', this.register)
            .get('/api/process', this.findAll)
    }
}
