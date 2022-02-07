export class EnumState {

    static ACTIVE = new EnumState('A', 'Activo');
    static INACTIVE = new EnumState('B', 'Inactivo');

    public code: string;
    public value: string;

    private constructor(code: string, value: string){
        this.code = code;
        this.value = value;
    }

    static list() : Array<EnumState>{
        return [
            EnumState.ACTIVE,
            EnumState.INACTIVE
        ]
    }

    static findByCode(code: string){
        for(let status of EnumState.list()){
            if(status.code === code){
                return status;
            }
        }
    }

}
