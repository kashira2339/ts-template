import Person from './Person'

export default class Japanese implements Person {
    firstname:string;
    lastname:string;

    constructor(firstname:string, lastname:string) {
        this.lastname = lastname;
        this.firstname = firstname;
    }
    sayHello() {
        return `${this.lastname} ${this.firstname} さん、こんにちは!`;
    }
}
