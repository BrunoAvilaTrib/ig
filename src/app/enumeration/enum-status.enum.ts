export class EnumStatus {

    static SAVE_OK = new EnumStatus('8000', 'Registro exitoso.');
    static DELETE_OK = new EnumStatus('8001', 'Registro eliminado.');
    static UPDATE_OK = new EnumStatus('8003', 'Registro Actualizado.');
    static CHANGE_CONFIG_OK = new EnumStatus('8888', 'Se ha cambiado el estado de la configuración.');

    public code: string;
    public value: string;

    private constructor(code: string, value: string){
        this.code = code;
        this.value = value;
    }

    static list() : Array<EnumStatus>{
        return [
            EnumStatus.SAVE_OK,
            EnumStatus.DELETE_OK,
            EnumStatus.UPDATE_OK,
            EnumStatus.CHANGE_CONFIG_OK,
        ]
    }

    static findByCode(code: string){
        for(let status of EnumStatus.list()){
            if(status.code === code){
                return status;
            }
        }
    }

}
