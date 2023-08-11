import { ObjectId, ObtainDocumentType } from "mongoose";
import { JwtAuth } from "../../application/services/JwtAuth";
import { User } from "../../domain/entities/User";
import userModel from '../../domain/schemas/userSchema';
import { ValidateRegister } from "../../application/services/ValidateRegister";

export class UserRepositoy {

    private static ListUsers: User[] = [];
    private validateRegister = new ValidateRegister();

    async register(user: User) {

        try {
            if (!await this.validateRegister.checkIfExistsRegister(user.login, user.email)) {
                
                await userModel.create(user);
                await console.log("User created with successfully!!!"); 
                return true;
            }
            
            console.log("User already exist!!!");  
            return false;
        } catch (err) {

            console.log("Error: ", err);
            return false;
        }
    }

    async signIn(login: string, password: string): Promise<string | null> {

        const user = await userModel.findOne({ $and: [ { login}, { password }] }) 

        if (!user) return null;

        const token = new JwtAuth().generateAcessToken(user)

        if (!token) return null;

        return token;
    }

    async findAll(): Promise<User[]> { 

        // UserRepositoy.ListUsers.push(...UserRepositoy.usuariosMock);
        return UserRepositoy.ListUsers;
    }
}