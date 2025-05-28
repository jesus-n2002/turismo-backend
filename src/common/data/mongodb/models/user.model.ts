import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, "Missing name"],
    },

    email: {
        type: String,
        required: [true, "Missing email"],
        unique: true,
    },

    password: {
        type: String,
        required: [true, "Missing password"],
    },

    roles: {
        type: [String],
        required: [true, "Missing roles"],
    },

    image: {
        type: String,
        default: null,
    },

    status: {
        type: Boolean,
        default: true
    },
},{
    timestamps: true,
})

export const UserModel = mongoose.model("User", UserSchema);