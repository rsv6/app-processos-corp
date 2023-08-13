import { ENivel } from "../../types/Enums";


export class User {
    name : string = "";
    login : string = "";
    email : string = "";
    password : string = "";
    nivel: ENivel[] = []

    constructor(name: string, login: string, email: string, password: string ) {
        this.name = name;
        this.login = login;
        this.email = email;
        this.password = password;
        this.nivel.push(ENivel.user);
    }
}