import { Role } from '@app/model/role';

export class EnumRole {
    
    static SUPERVISOR = new EnumRole(2, 'SUPERVISOR');
    static OFFICER = new EnumRole(3, 'FUNCIONARIO');
    static ADMINISTRATOR = new EnumRole(1, 'ADMINISTRADOR');
    static GLOBAL = new EnumRole(4, 'GLOBAL');

    public code: number;
    public value: string;

    private constructor(code: number, value: string){
        this.code = code;
        this.value = value;
    }

    toRole(){
        return new Role(this.code, this.value); 
    }

}
