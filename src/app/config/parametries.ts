export class Parametries {

    //EMPLOYEE
    static PASS_MIN_LENGTH = 8;
    static PASS_MAX_LENGTH = 15;
    static NAME_PAT_MAT_MIN_LENGTH = 3;
    static NAME_MAX_LENGTH = 100;
    static APE_PAT_MAX_LENGTH = 60;
    static APE_MAT_MAX_LENGTH = 60;
    static EMAIL_MAX_LENGTH = 150;
    static PHONE_MIN_LENGTH = 7;
    static PHONE_MAX_LENGTH = 12;
    static MOBILE_MIN_LENGTH = 9;
    static MOBILE_MAX_LENGTH = 12;
    static LOGIN_MIN_LENGTH = 5;
    static LOGIN_MAX_LENGTH = 20;
    static PATTERN_NUMBER = /^[0-9]*$/;
    static PATTERN_PASSWORD = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)([A-Za-z\d]){8,60}$/;
    static PATTERN_PASSWORD_VOID = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)([A-Za-z\d]){8,60}$|^$/;
    static ALIAS_MIN_LENGTH = 3;
    static ALIAS_MAX_LENGTH = 30;
    static PATTERN_ALL_CADENA = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
    static PATTERN_LOGIN = /^[a-zA-Z]+$/;
    static EMPLOYEE_ONLY_NUMBER_AND_CADENA = /[A-Za-z0-9]+/;

    //AREA
    static AREA_NAME_MIN_LENGTH = 3;
    static AREA_NAME_MAX_LENGTH = 100;
    static AREA_ANEXO_MIN_LENGTH = 3;
    static AREA_ANEXO_MAX_LENGTH = 20;
    static AREA_PATTERN_ANEXO = /^([0-9]){3}$/;
    static AREA_ONLY_NUMBER_AND_CADENA = /[A-Za-z0-9]+/;
    static AREA_PHONE_MIN_LENGTH = 7;
    static AREA_PHONE_MAX_LENGTH = 12;
    static AREA_COMMENT_MIN_LENGTH = 3;
    static AREA_COMMENT_MAX_LENGTH = 30;

    //BUSINESS
    static BUSINESS_NAME_MIN_LENGTH = 3;
    static BUSINESS_NAME_MAX_LENGTH = 50;
    static BUSINESS_RUC_MIN_LENGTH = 3;
    static BUSINESS_RUC_MAX_LENGTH = 50;
    static BUSINESS_EMAIL_MIN_LENGTH = 3;
    static BUSINESS_EMAIL_MAX_LENGTH = 50;
}
