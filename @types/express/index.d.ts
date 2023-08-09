import { User } from "../../src/domain/entities/User";

declare global {
    namespace Express {
        interface Request {
            user: User
        }
    }
}