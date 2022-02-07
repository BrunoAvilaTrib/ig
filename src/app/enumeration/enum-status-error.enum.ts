export class EnumStatusError {

    static OFFICER_WITH_CONTACTS = new EnumStatusError('8001', 'El funcionario tiene contactos asociados.');
    static PARAMETER_INVALID = new EnumStatusError('0052', 'Valide los par\u00E1metros.');
    static SESSION_EXPIRE = new EnumStatusError('7777', 'Su sesi\u00F3n ha expirado.');
    static ERROR_UNEXPECTED = new EnumStatusError('9999', 'Ocurri\u00F3 un error inesperado.');

    static RESULT_OK = new EnumStatusError("0000", "Procesado exitosamente.");
    static USER_NOT_EXIST = new EnumStatusError("0002", "Usuario no existe.");
    static USER_LOCKOUT = new EnumStatusError("0004", "El usuario se encuentra bloqueado.");
    static USER_MAX_ATTEMPT = new EnumStatusError("0003", "Usuario ha supera el limite de intentos.");
    static ERROR_STORE_PROCEDURE = new EnumStatusError('8888', 'Ocurri\u00F3 un error inesperado.');
    static LOGIN_ATTEMPT = new EnumStatusError("0001", "Intento fallido de login.");

    static LOGER_DESBLOCK = new EnumStatusError("0005", "Desbloqueo exitoso.");
    static AREA_NAME_IN_USE = new EnumStatusError("0010", "\u00C1rea con ese nombre ya en uso.");
    static NUMBER_IN_USE = new EnumStatusError("0011", "Numero ya en uso.");
    static LOGIN_AND_PHONE_AND_EMAIL_IN_USE = new EnumStatusError("0021", "Nombre usuario, numero y email ya en uso.");
    static LOGIN_AND_MOBILE_IN_USE = new EnumStatusError("0022", "Nombre de usuario y telefono en uso.");
    static MOBILE_AND_EMAIL_IN_USE = new EnumStatusError("0023", "Tel\u00E9fono y email ya en uso.");
    static NAME_AND_EMAIL_IN_USE = new EnumStatusError("0024", "Nombre y email ya en uso.");
    static NAME_IN_USE = new EnumStatusError("0025", "Nombre ya en uso.");
    static PHONE_IN_USE = new EnumStatusError("0026", "Celular ya en uso.");
    static EMAIL_IN_USE = new EnumStatusError("0027", "Email ya en uso.");
    static ERROR_DELETE_AREA = new EnumStatusError("0031", "El area ya fue asignada a un usuario.");
    static EMAIL_AND_MOBILE_IN_USE = new EnumStatusError("0041", "Email y telefono en uso.");
    static EMAI_IN_USE = new EnumStatusError("0042", "Telefono  ya esta en uso.");
    static MOBILE_IN_USE = new EnumStatusError("0043", "Email en uso.");
    static NOT_CHANGE_OFFICER = new EnumStatusError("0044", "Este supervisor tiene asignado funcionarios a su cargo.");
    static NOT_CHANGE_SUPERVISOR = new EnumStatusError("0055", "Este supervisor tiene asignado funcionarios a su cargo.");
    static ERROR_DELETE_EMPLOY = new EnumStatusError("0061", "el funcionarios ya tiene conversaciones.");
    static ERROR_DELETE_OFFICER_EMPLOY = new EnumStatusError("0062", "El supervisor tiene funcionarios a su cargo.");

    public code: string;
    public value: string;

    private constructor(code: string, value: string) {
        this.code = code;
        this.value = value;
    }

    static list(): Array<EnumStatusError> {
        return [
            EnumStatusError.OFFICER_WITH_CONTACTS,
            EnumStatusError.PARAMETER_INVALID,
            EnumStatusError.SESSION_EXPIRE,
            EnumStatusError.ERROR_UNEXPECTED,
            EnumStatusError.ERROR_STORE_PROCEDURE,
            EnumStatusError.RESULT_OK,
            EnumStatusError.USER_NOT_EXIST,
            EnumStatusError.USER_LOCKOUT,
            EnumStatusError.USER_MAX_ATTEMPT,
            EnumStatusError.ERROR_STORE_PROCEDURE,
            EnumStatusError.LOGIN_ATTEMPT,
            EnumStatusError.LOGER_DESBLOCK,
            EnumStatusError.AREA_NAME_IN_USE,
            EnumStatusError.NUMBER_IN_USE,
            EnumStatusError.LOGIN_AND_PHONE_AND_EMAIL_IN_USE,
            EnumStatusError.LOGIN_AND_MOBILE_IN_USE,
            EnumStatusError.MOBILE_AND_EMAIL_IN_USE,
            EnumStatusError.NAME_AND_EMAIL_IN_USE,
            EnumStatusError.NAME_IN_USE,
            EnumStatusError.PHONE_IN_USE,
            EnumStatusError.EMAIL_IN_USE,
            EnumStatusError.ERROR_DELETE_AREA,
            EnumStatusError.EMAIL_AND_MOBILE_IN_USE,
            EnumStatusError.EMAI_IN_USE,
            EnumStatusError.MOBILE_IN_USE,
            EnumStatusError.NOT_CHANGE_OFFICER,
            EnumStatusError.NOT_CHANGE_SUPERVISOR,
            EnumStatusError.ERROR_DELETE_EMPLOY,
            EnumStatusError.ERROR_DELETE_OFFICER_EMPLOY
        ]
    }

    static findByCode(code: string) {
        for (let status of EnumStatusError.list()) {
            if (status.code === code) {
                return status;
            }
        }
    }
}
