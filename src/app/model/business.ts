import { FormGroup } from '@angular/forms';

export class Business {

    private businessPk: number;
    public name: string;
    public ruc: string;
    public email: string;
    public state: string;

    fromFormBusinessAdd(formBusinessAdd: FormGroup) {

        this.name = formBusinessAdd.value.name;
        this.ruc = formBusinessAdd.value.ruc;
        this.email = formBusinessAdd.value.email;
    }
    toBusinessAdd(){

        return {
            "name": this.name,
            "ruc": this.ruc,
            "email": this.email
        };
    }
    fromFormBusinessUpdate(formBusinessUpdate: FormGroup) {

        this.businessPk = formBusinessUpdate.value.businessPk;
        this.name = formBusinessUpdate.value.name.trim();
        this.state = formBusinessUpdate.value.state;
        this.ruc = formBusinessUpdate.value.ruc;
        this.email = formBusinessUpdate.value.email;
    }
    toBusinessUpdate(businessPk: number){

        return {
            "businessPK": businessPk,
            "name": this.name,
            "ruc": this.ruc,
            "state": this.state,
            "email": this.email
        };
    }
}