import mongoose, { Schema } from "mongoose";

const TransportSchema = new Schema({
    name: {
        type: String,
        required: [true, "Missing name"],
    },
    routes: {
        type: [String],
        required: [true, "Missing routes"],
    },
    stops: {
        type: [String],
        required: [true, "Missing stops"],
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

export const TransportModel = mongoose.model("Transport", TransportSchema);