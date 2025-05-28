import mongoose from "mongoose";

export class Validators{
    static isMongotId(id: string){
        return mongoose.Types.ObjectId.isValid(id);
    }
}