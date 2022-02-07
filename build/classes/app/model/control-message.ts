export class ControlMessage {
    
    delay: number;
    onSuccess: any;

    constructor(
        public msg: string,
        public type: string,
        public icon: string
    ){
        this.delay = 3000;
    }

    success(callback: any){
        this.onSuccess = callback;
        return this;
    }

}
