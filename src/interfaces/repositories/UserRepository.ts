import { Document, ObjectId } from "mongoose";
import { JwtAuth } from "../../application/services/JwtAuth";
import { User } from "../../domain/entities/User";
import userModel from '../../domain/schemas/userSchema';
import { ValidateRegister } from "../../application/services/ValidateRegister";

export class UserRepository {

    private listUsers: User[] = [];
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

    // async signIn(login: string, password: string): Promise<string | null> {
    async signIn(login: string, password: string): Promise<string | null> {

        const user = await userModel.findOne({ $and: [ { login}, { password }] }) 

        console.log("User: ", user);

        if (!user) return null;

        const token = new JwtAuth().generateAcessToken(user)

        if (!token) return null;

        return token;
    }

    async findAll(): Promise<User[]> { 

        const resListUsers = await userModel.find();

        // this.listUsers.push(...listUsers)

        return resListUsers;
    }

    async findOne(login: string, email: string): Promise<Object | null> {

        try {

            const result = await userModel.findOne({
                $and:[{ login }, { email }]
            })

            return result;
        } catch (err) {
            console.log("Error at update: ", err);
            return null;
        }
    }

    async updateOne(id: string, data: User): Promise<any> {

        try {
            const result = await userModel.findOneAndUpdate(
                { _id: id },
                { $set: { 
                    email: String(data?.email),
                    nivel: String(data?.nivel),
                    password: String(data?.password)
                }}
            )

            if (!result) {
                return null;
            }

            return [];
        } catch (err) {
            console.log("Error at update: ", err);
            return null;
        }
    }

    async deleteOne(id: string): Promise<any> {

        try {
            const result = await userModel.deleteOne({ _id: id });

            console.log(result);
            if (result.deletedCount == 0) {
                return null;
            }

            return [];

        } catch (err) {
            console.log("Error at delete: ", err);
            return null
        }
    }
}