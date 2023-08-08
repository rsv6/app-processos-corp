import { processMock } from "../../adapters/database/mock";
import { Process } from "../../domain/entities/Process";

export class ProcessRepository {

    private static ListProcess: Process[] = [];
    private static processMock = processMock;

    register(process: Process) {
        ProcessRepository.ListProcess.push(process);
        return true;
    }

    findAll(): Process[] {
        ProcessRepository.ListProcess.push(...ProcessRepository.processMock);
        return ProcessRepository.ListProcess;
    }
}
