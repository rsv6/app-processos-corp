
export class Process {
    private registerId? : String = "";
    private titleDocument? : String = "";
    private link? : String = "";
    private referent? : String = "";
    private recipient? : String = "";
    public dateStart : Date = new Date();
    public dateEnd : Date = new Date();
    public leftDays : Number = 0;

    constructor(registerId: string, titleDocument: String, link: String, referent: String, recipient: String, dateStart: Date, dateEnd: Date) {
        this.registerId = registerId;
        this.titleDocument = titleDocument;
        this.link = link;
        this.referent = referent;
        this.recipient = recipient;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.leftDays = Number(dateEnd) - Number(new Date());
    }

    public getRegisterId(): String | undefined {
        return this.registerId;
    }

    public setRegisterId(registerId: String) {
        this.registerId = registerId;
    }

    public getTitleDocument(): String | undefined {
        return this.titleDocument;
    }

    public setTitleDocument(titleDocument: String) {
        this.titleDocument = titleDocument;
    }

    public getLink(): String | undefined {
        return this.link;
    }

    public setLink(link: String) {
        this.link = link;
    }

    public getReferent(): String | undefined {
        return this.referent;
    }

    public setReferent(referent: String) {
        this.referent;
    }

    public getRecipient(): String | undefined {
        return this.recipient;
    } 

    public setRecipient(recipient: String) {
        this.recipient;
    }

    public getDateStart(): Date {
        return this.dateStart;
    }

    public setDateStart(dateStart: Date) {
        this.dateStart = dateStart;
    }

    public getDateEnd(): Date {
        return this.dateEnd;
    }

    public setDateEnd(dateEnd: Date) {
        this.dateEnd = dateEnd;
    }

    public getLeftDays(): Number {
        return this.leftDays;
    }

    public setLeftDays(leftDays: Number) {
        this.leftDays = leftDays;
    }

}