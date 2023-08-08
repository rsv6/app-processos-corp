import { Router } from "express";
import { UserController } from "./UserController";
import { ProcessController } from "./ProcessController";

export class AppRouters {
    private router: Router = Router();
    private user = new UserController();


    start() {
        return this.router
            .use(new ProcessController().routers())
            .use(this.user.routers())
    }
}