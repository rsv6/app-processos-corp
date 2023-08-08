export class User {
    id? : Number;
    name? : string;
    login? : string;
    password? : string;

    constructor(name: string, login: string, password: string) {
        this.name = name;
        this.login = login;
        this.password = password;
    }
}