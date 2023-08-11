import userModel from '../../domain/schemas/userSchema';

export class ValidateRegister {
    
    async checkIfExistsRegister(login: string, email: string) {
        return await userModel.findOne({ $or: [{ login }, { email }] })
    }
}