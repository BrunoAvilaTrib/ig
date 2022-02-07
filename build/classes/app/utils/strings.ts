export class Strings {
    
    static isNotEmpty(value){
        return value && value.toString().length > 0;
    }

    static isEmpty(value){
        return !this.isNotEmpty(value);
    }
}
