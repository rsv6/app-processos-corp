"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessRepository = void 0;
const mock_1 = require("../../adapters/database/mock");
class ProcessRepository {
    register(process) {
        ProcessRepository.ListProcess.push(process);
        return true;
    }
    findAll() {
        ProcessRepository.ListProcess.push(...ProcessRepository.processMock);
        return ProcessRepository.ListProcess;
    }
}
exports.ProcessRepository = ProcessRepository;
ProcessRepository.ListProcess = [];
ProcessRepository.processMock = mock_1.processMock;
