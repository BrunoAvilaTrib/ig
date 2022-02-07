import { ReqExcluid } from './req-excluid';

export class ReqOfficer {
    apeMat: string;
    apePat: string;
    email: string;
    employFk: number;
    listAddExcluidRequest: Array<ReqExcluid>;
    mobile: string;
    name: string;
    password: string;
    sex: string;
    stateConfig: string;
    statePrivilege: string;
    areaFk: number;
    roleFK: number;
    businessFK: number;
}
