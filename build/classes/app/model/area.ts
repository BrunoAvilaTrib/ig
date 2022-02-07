import { FormGroup } from '@angular/forms';

export class Area {

    private areaPk: number;
    public areaName: string;

    public areaSupport: string;
    public areaComment:string;
    public businessFK: number;;
    
    setAreaPk(areaPk: number){

        this.areaPk = areaPk;
    }

    private evalState(isActive: boolean){

        return isActive ? 'A' : 'B';
    }

    fromFormAreaAdd(formAreaAdd: FormGroup) {

        this.areaName = formAreaAdd.value.areaName;
        this.areaComment = formAreaAdd.value.areaComment;
        this.businessFK = formAreaAdd.value.businessFK;
    }

    fromFormAreaUpdate(formAreaUpdate: FormGroup) {

        this.areaPk = formAreaUpdate.value.areaPk;
        this.areaName = formAreaUpdate.value.areaName.trim();

        this.areaComment = formAreaUpdate.value.areaComment;
        this.areaSupport = formAreaUpdate.value.areaSupport;
    }

    toAreaAdd(){

        return {
            "areaName": this.areaName,
            "areaComment": this.areaComment,
            "businessFK": this.businessFK
        };
    }

    toAreaUpdate(areaPk: number){

        return {
            "areaPk": areaPk,
            "areaName": this.areaName,
            "areaComment": this.areaComment,
            "areaSupport": this.areaSupport
        };
    }

}
