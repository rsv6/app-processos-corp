
export class Process {
    private id : Number = 0;
    private registerId? : string;
    private titleDocument : String = "";
    private link? : String = "";
    private remetente? : String = "";
    private recipient : String = "";
    public dateStart : Date = new Date();
    public dateEnd : Date = new Date();
    public leftDays : Number = 0;

    constructor(registerId: string, titleDocument: String, link: String, remetente: String, recipient: String, dateStart: Date, dateEnd: Date) {
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