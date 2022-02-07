import { FormGroup } from '@angular/forms';

export class Administrador {

    public employPk: number;
    public name: string;
    public apePat: string;
    public apeMat: string;
    public sex: string;
    public mobile: string;
    public email: string;
    public password: string;
    public businessFK: number;
    public roleFK: number;

    fromFormAdminAdd(formAdminAdd: FormGroup) {

        this.name = formAdminAdd.value.name;
        this.apePat = formAdminAdd.value.apePat;
        this.apeMat = formAdminAdd.value.apeMat;
        this.sex = formAdminAdd.value.sex;
        this.mobile = formAdminAdd.value.mobile;
        this.email = formAdminAdd.value.email;
        this.password = btoa(formAdminAdd.value.password);
        this.businessFK = formAdminAdd.value.businessFK;
        this.roleFK = formAdminAdd.value.roleFK;
    }
    toAdminAdd(){

        return {
            "name": this.name,
            "apePat": this.apePat,
            "apeMat": this.apeMat,
            "sex": this.sex,
            "mobile": this.mobile,
            "email": this.email,
            "password": this.password,
            "businessFK": this.businessFK,
            "roleFK": this.roleFK
        };
    }

    fromFormAdminUpdate(formAdminAdd: FormGroup) {

        this.name = formAdminAdd.value.name;
        this.apePat = formAdminAdd.value.apePat;
        this.apeMat = formAdminAdd.value.apeMat;
        this.sex = formAdminAdd.value.sex;
        this.mobile = formAdminAdd.value.mobile;
        this.email = formAdminAdd.value.email;
        this.password = btoa(formAdminAdd.value.password);
        this.businessFK = formAdminAdd.value.businessFK;
        this.roleFK = formAdminAdd.value.roleFK;
    }

    toAdminUpdate(employPk: number){

        return {
            "employPk": employPk,
            "name": this.name,
            "apePat": this.apePat,
            "apeMat": this.apeMat,
            "sex": this.sex,
            "mobile": this.mobile,
            "email": this.email,
            "password": this.password,
            "businessFK": this.businessFK,
            "roleFK": this.roleFK
        };
    }
}