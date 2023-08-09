import 'dotenv/config';
import express from "express";
import { App } from "../adapters/express";
import { AppRouters } from "../interfaces/controllers";


export class Server {
    private app = new App().start();

    public bootStart() {

        this.init();
    }

    private init() {
        this.app.use(
            express.urlencoded({ extended: true }),
            express.json()
        );
            
        this.setRoutes();

        this.app.listen(8085, () => {
            console.log("Server running on port 8085");
        })
    }

    private setRoutes() {
        this.app.use(new AppRouters().start())
    }

    public getApp() {
        return this.app
    }
}


