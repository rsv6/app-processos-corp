"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Process = void 0;
class Process {
    constructor(registerId, titleDocument, link, remetente, recipient, dateStart, dateEnd) {
        this.id = 0;
        this.titleDocument = "";
        this.link = "";
        this.remetente = "";
        this.recipient = "";
        this.dateStart = new Date();
        this.dateEnd = new Date();
        this.leftDays = 0;
        this.registerId = registerId;
        this.titleDocument = titleDocument;
        this.link = link;
        this.remetente = remetente;
        this.recipient = recipient;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.leftDays = Number(dateEnd) - Number(new Date());
    }
}
exports.Process = Process;
