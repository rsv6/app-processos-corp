"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessController = void 0;
const express_1 = require("express");
const ProcessRepository_1 = require("../repositories/ProcessRepository");
const validation_1 = require("../../application/services/validation");
const schemas_1 = require("../../application/services/schemas");
const Process_1 = require("../../domain/entities/Process");
class ProcessController {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    register(req, res) {
        let { registerId, title, link, remetente, recipient, dateStart, dateEnd } = req.body;
        ProcessController
            .processRepository
            .register(new Process_1.Process(registerId, title, link, remetente, recipient, dateStart, dateEnd));
        return res.status(201).json({ msg: 'ok', data: ProcessController.processRepository });
    }
    findAll(req, res) {
        return res.status(200)
            .json({
            msg: 'ok',
            data: ProcessController.processRepository.findAll()
        });
    }
    routers() {
        return this.router
            .post('/api/process', (0, validation_1.validate)(schemas_1.registerProcessSchema), this.register)
            .get('/api/process', this.findAll);
    }
}
exports.ProcessController = ProcessController;
ProcessController.processRepository = new ProcessRepository_1.ProcessRepository();
