import mongoose from "mongoose"

export class MongoDB{
    async connect(){
        try {
            await mongoose.connect("mongodb://nodejs:secret123456@localhost:27017", {dbName: "turismo"})
            console.log("MongoDB connected!")
        } catch (error) {
            console.error(error)
        }
    }
}