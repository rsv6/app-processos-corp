import mongoose from "mongoose";
import { User } from "../entities/User";
import { ENivel } from "../../types/Enums";

const userSchema = new mongoose.Schema<User>(
    {
        name: {
            type: String,
            require: true
        },
        login:  {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        nivel: {
            type: [],
            require: true
        }
    },
    { 
        timestamps: true
    }
)

export default mongoose.model('User', userSchema)