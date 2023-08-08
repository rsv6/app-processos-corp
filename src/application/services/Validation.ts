
export class Validation {

    static checkReqProcess(
        title: string, 
        link: string, 
        remetente: string,
        recipient: string,
        dateStart: Date,
        dateEnd: Date
    ) {

        if (title == "" || title != undefined) {
            return false;
        } else if (link == "" || link != undefined) {
            return false;
        } else if (remetente == "" || remetente == undefined) {
            return false;
        } else if (recipient == "" || recipient == undefined) {
            return false;
        } else if (!dateStart || dateStart == undefined) {
            return false;
        } else if (!dateEnd || dateEnd == undefined) {
            return false;
        }

        return true;
    }

}