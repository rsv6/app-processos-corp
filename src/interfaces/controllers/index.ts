import { Router } from "express";
import { UserController } from "./UserController";
import { ProcessController } from "./ProcessController";

export class AppRouters {
    private router: Router = Router();

    start() {
        return this.router
            .use(new ProcessController().routers())
            .use(new UserController().routers())
    }
}