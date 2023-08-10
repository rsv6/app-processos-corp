

export class User {
    name : string = "";
    login : string = "";
    email : string = "";
    password : string = "";
    nivel: string = "";

    constructor(name: string, login: string, email: string, password: string ) {
        this.name = name;
        this.login = login;
        this.email = email;
        this.password = password;
        this.nivel = "user";
    }
}