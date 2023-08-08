import { userMock } from "../../adapters/database/mock";
import { User } from "../../domain/entities/User";

export class UserRepositoy {

    private static ListUsers: User[] = [];
    private static usuariosMock = userMock;

    register(user: User) {
        UserRepositoy.ListUsers.push(user);
        return true;
    }

    findAll(): User[] {
        UserRepositoy.ListUsers.push(...UserRepositoy.usuariosMock);
        return UserRepositoy.ListUsers;
    }

}