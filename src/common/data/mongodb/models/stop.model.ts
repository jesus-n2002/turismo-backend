import mongoose, { Schema } from "mongoose";

const StopSchema = new Schema({
    name: {
        type: String,
        required: [true, "Missing name"],
    },

    longitude: {
        type: String,
        required: [true, "Missing Longitude"],
    },

    latitude: {
        type: String,
        required: [true, "Missing Latitude"],
    },

    photo: {
        type: String,
        required: false,
    },

    description: {
        type: String,
        required: false,
    },

    status: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true,
})

export const StopModel = mongoose.model("Stop", StopSchema);