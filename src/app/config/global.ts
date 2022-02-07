import { Role } from '@app/model/role';

declare var GlobalVars: any;
export const GlobalVariable = Object.freeze({
    BASE_API_URL: GlobalVars.getConstant('BASE_API_URL'),
    PERSIST_SESSION: true
});