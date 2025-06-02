import mongoose, { Schema } from "mongoose";

const CategorySchema = new Schema({
    name: {
        type: String,
        required: [true, "Missing name"],
    },

    description: {
        type: String,
        required: false,
    },

    status: {
        type: Boolean,
        default: true
    },
},{
    timestamps: true,
})

export const CategoryModel = mongoose.model("Category", CategorySchema);