import Person from './Person'

export default class American implements Person {
    firstname:string;
    lastname:string;

    constructor(lastname:string, firstname:string) {
        this.lastname = lastname;
        this.firstname = firstname;
    }
    sayHello() {
        return `Hello ${this.firstname} ${this.lastname}!`;
    }
}
