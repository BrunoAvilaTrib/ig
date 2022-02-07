import { FormGroup } from '@angular/forms';
import { ReqSupervisor } from '@app/request/req-supervisor';
import { ReqOfficer } from '@app/request/req-officer';
import { ReqExcluid } from '@app/request/req-excluid';
import { ReqUpdateSupervisor } from '@app/request/req-update-supervisor';
import { EnumState } from '@app/enumeration/enum-state.enum';
import { ReqUpdateOfficer } from '@app/request/req-update-officer';
import { ReqAddOfficer } from '@app/request/req-add-officer';
import { ReqAdministrador } from '@app/request/req-administrardor';
import { ReqDeleteSupervisor } from '@app/request/req-delete-supervisor';

export class Employee {

    private employPk: number;
    public login: string;
    public password: string;
    public name: string;
    public apePat: string;
    public apeMat: string;
    public sex: string;
    public mobile: string;
    public email: string;
    public employFk: number;
    public stateConfig: string;
    public statePrivilege: string;
    public areaFk: number;
    public superEmployPk: number;
    public businessFK: number;
    public excluids: Array<ReqExcluid>;
    public roleFk: number;
    public listAddExcluidRequest: any[];

    setEmployPk(employPk: number){
        this.employPk = +employPk;
        
    }

    setSuperEmployPk (superEmployPk : number){
        this.superEmployPk = +superEmployPk;
    }

    private evalState(isActive: boolean) : string{
        return isActive ? EnumState.ACTIVE.code : EnumState.INACTIVE.code;
    }

    fromFormEmploy(formEmployAdd: FormGroup) {
        this.password = btoa(formEmployAdd.value.password);
        this.name = formEmployAdd.value.name.trim();
        this.apePat = formEmployAdd.value.apePat.trim();
        this.apeMat = formEmployAdd.value.apeMat.trim();
        this.sex = formEmployAdd.value.sex;
        this.mobile = formEmployAdd.value.mobile;
        this.email = formEmployAdd.value.email;
        this.employFk = formEmployAdd.value.employFk;
        this.stateConfig = this.evalState(formEmployAdd.value.checkedExcluded);
        this.statePrivilege = this.evalState(formEmployAdd.value.checkedConfiguration);
        this.areaFk = formEmployAdd.value.areaFk;
        this.businessFK = formEmployAdd.value.businessFK;
        this.roleFk =formEmployAdd.value.roleFk;
        this.listAddExcluidRequest = formEmployAdd.value.listAddExcluidRequest;
    }

    // setExcluids(excluids: Array<ReqExcluid>){
    //     this.excluids = excluids;
    // }

    toSupervisor() : ReqSupervisor {
        return {
            "password": this.password,
            "name": this.name,
            "apePat": this.apePat,
            "apeMat": this.apeMat,
            "sex": this.sex,
            "mobile": this.mobile,
            "email": this.email,
            "statePrivilege": this.statePrivilege,
            "areaFK": this.areaFk,
            "businessFK": this.businessFK,
            "roleFK":this.roleFk

        };
    }

    toAdministrador() : ReqAdministrador {
        return {
            "password": this.password,
            "name": this.name,
            "apePat": this.apePat,
            "apeMat": this.apeMat,
            "sex": this.sex,
            "mobile": this.mobile,
            "email": this.email,
            "businessFK": this.businessFK,
            "roleFK":this.roleFk
        };
    }

    toUpdateSupervisor() : ReqUpdateSupervisor {
        return {
            "employPk": this.employPk,
            "password": this.password,
            "name": this.name,
            "apePat": this.apePat,
            "apeMat": this.apeMat,
            "sex": this.sex,
            "mobile": this.mobile,
            "email": this.email,
            "statePrivilege": this.statePrivilege,
            "areaFk": this.areaFk,
            "state": EnumState.ACTIVE.code
        };
    }

    toOfficer() : ReqAddOfficer {
        return {
            "areaFK": this.areaFk,
            "apeMat": this.apeMat,
            "apePat": this.apePat,
            "email": this.email,
            "employFk": this.employFk,
            "listAddExcluidRequest": this.listAddExcluidRequest,
            "mobile": this.mobile,
            "name": this.name,
            "password": this.password,
            "sex": this.sex,
            "stateConfig": this.stateConfig,
            "statePrivilege": this.statePrivilege,
            "businessFK": this.businessFK,
            "roleFK": this.roleFk
        };
    }

    toUpdateOfficer() : ReqUpdateOfficer {
        return {
            "employPk": this.employPk,
            "apeMat": this.apeMat,
            "apePat": this.apePat,
            "email": this.email,
            "employFk": this.employFk,
            "areaFk" : this.areaFk,
           // "excluids": this.excluids,
            "mobile": this.mobile,
            "name": this.name,
            "password": this.password,
            "sex": this.sex,
            "stateConfig": this.stateConfig,
           // "statePrivilege": this.statePrivilege,
           //"state": EnumState.ACTIVE.code
        };
    }

    toDeleteSupervisor() : ReqDeleteSupervisor{
        return {
            "employPK": this.employPk,
            "superEmployPK" :  this.superEmployPk
        }

    }

}
