import { AbstractControl } from '@angular/forms';
import { Strings } from '@app/utils/strings';

export class AppValidator {

    constructor(){
    }

    static mobileNumber(control: AbstractControl): { [key: string]: any } | null {
        var valid = Strings.isEmpty(control.value) || /^\d{9}$/.test(control.value);
        return valid ? null : { invalidNumber: { valid: false, value: control.value } };
    }

    static phoneNumber(control: AbstractControl): { [key: string]: any } | null {
        var valid = Strings.isEmpty(control.value) || /^\d{7,10}$/.test(control.value);
        return valid ? null : { invalidNumber: { valid: false, value: control.value } };
    }

    static email(control: AbstractControl): { [key: string]: any } | null {
        var valid = Strings.isEmpty(control.value) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d]){0,70}$/.test(control.value);
        return valid ? null : { pattern: { valid: false, value: control.value } };
    }

    static validatePassword(control: AbstractControl): { [key: string]: any } | null {
        var valid = Strings.isEmpty(control.value) || /^(?=.[A-Z])(?=.[a-z])(?=.*\d)[A-Za-z\d]{8,15}$/.test(control.value);
        return valid ? null : { invalidNumber: { valid: false, value: control.value } };
    }
    
}