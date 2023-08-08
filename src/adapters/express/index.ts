import express from "express";

export class App {

    private app = express();
    
    public start() {
        return this.app;
    }
}