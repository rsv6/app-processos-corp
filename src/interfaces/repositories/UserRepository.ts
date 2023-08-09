import { userMock } from "../../adapters/database/mock";
import { JwtAuth } from "../../application/services/JwtAuth";
import { User } from "../../domain/entities/User";

export class UserRepositoy {

    private static ListUsers: User[] = [];
    private static usuariosMock = userMock;

    register(user: User) {

        UserRepositoy.ListUsers.push(user);
        return true;
    }

    signIn(login: string, password: string) {
        let users = this.findAll().some(user => user.login == login && user.password == password);

        console.log("User: ", users);

        if (!users) return null;

        const token = new JwtAuth().generateAcessToken({ login, password })

        console.log("Token: ", token)

        if (!token) {
            return null;
        }

        return token;
    }

    findAll(): User[] {
        UserRepositoy.ListUsers.push(...UserRepositoy.usuariosMock);
        return UserRepositoy.ListUsers;
    }

}