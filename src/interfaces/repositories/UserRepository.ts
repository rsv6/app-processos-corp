import { userMock } from "../../adapters/database/mock";
import { JwtAuth } from "../../application/services/JwtAuth";
import { User } from "../../domain/entities/User";
import userModel from '../../domain/schemas/userSchema';

export class UserRepositoy {

    private static ListUsers: User[] = [];
    private static usuariosMock = userMock;

    async register(user: User) {

        try {

            await userModel.create(user);

            return true;
        } catch (err) {

            console.log("Error: ", err);
            return false;
        }
    }

    signIn(login: string, password: string) {
        let users = this.findAll().some(user => user.login == login && user.password == password);

        if (!users) return null;

        const token = new JwtAuth().generateAcessToken({ login, password })

        if (!token) {
            return null;
        }

        return token;
    }

    findAll(): User[] {
        // UserRepositoy.ListUsers.push(...UserRepositoy.usuariosMock);
        return UserRepositoy.ListUsers;
    }

}