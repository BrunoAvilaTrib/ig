export class ChangeAssigned {

    private chatFK: number;
    private reasignedEmployFK: number;

    constructor(chatFk: number, employPk: number) {
        this.chatFK = chatFk;
        this.reasignedEmployFK = employPk;
    }
}
