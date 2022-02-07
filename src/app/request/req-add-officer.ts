import { ReqExcluid } from './req-excluid';

export class ReqAddOfficer {
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
    areaFK: number;
    roleFK: number;
    businessFK: number;
}
