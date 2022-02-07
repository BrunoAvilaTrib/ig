export class User {

    constructor(private name: string,
                private sessionId: string,
                private role: any,
                private area: Array<any>) {
                }

    public getName() {
        return this.name;
    }

    public getSessionId() {
        return this.sessionId;
    }

    public getRole() {
        return this.role;
    }
    public getArea() {
        return this.area;
    }
}
