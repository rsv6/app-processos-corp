import mongoose from 'mongoose';

export class Connection {  

    initConnection() {

        mongoose.connect(String(process.env.URI_MONGODB));
    
        const conn = mongoose.connection;

        conn.on("error", () => console.log("Error at try connection on database!!!"))

        conn.on("open", () => console.log("Connection establisded successfully!!!"))
    }
}