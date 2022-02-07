import { FormGroup } from '@angular/forms';

export class Message {

    private chatmobile: string;
    private message: string;
    private chatPk: number;
    private employPK: number;
    private toUser: string;
    private toAlias: string;
    private msgDate: string;
    private msgHour: string;
    private hashMsg: string;
    private modeMsg: string;
    private fileHash: string;
    private fileName: string;
    private fileExt: string;
    private fileSize: string;
    private fileImagen: string;


    setChatMobile(mobile: string) {
        this.chatmobile = mobile;
    }

    setChatFK(chatFk: number) {
        this.chatPk = chatFk;
    }

    setEmployFK(employPk: number) {
        this.employPK = employPk;
    }

    setToUser(toUser: string) {
        this.toUser = toUser;
    }

    setToAlias(toAlias: string) {
        this.toAlias = toAlias;
    }


    fromFormSendMessage(formMessage: FormGroup) {
        this.message = formMessage.value.msgText;
        this.msgDate = "22/06/2020";
        this.msgHour = "10:10";
        this.hashMsg = "asfasfgsdgsagd";
        this.modeMsg = "out";
        this.fileHash = null;
        this.fileName = null;
        this.fileExt = null;
        this.fileSize = null;
        this.fileHash = null;
    }

    requestSendMessage() {
        return {
            "chatMobile": this.chatmobile,
            "chatFK"  : this.chatPk,
            "employFK": this.employPK,
            "toUser"  : this.toUser,
            "toAlias" : this.toAlias,
            "msgText" : this.message,
            "msgDate" : this.msgDate,
            "msgHour" : this.msgHour,
            "hashMsg" : this.hashMsg,
            "modeMsg" : this.modeMsg,
            "fileHash": this.fileHash,
            "fileName": this.fileName,
            "fileExt" : this.fileExt,
            "fileSize": this.fileSize,
            "fileImagen": this.fileImagen
        };
    }
}
