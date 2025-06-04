import mongoose, { Schema, Types } from "mongoose";
import { ref } from "process";

const TousristSitesSchema = new Schema({
    name: {
        type: String,
        required: [true, "Missing name"],
    },
    category: {
        type: Types.ObjectId,
        ref: "Category",
        required: [true, "Missing category"],
    },
    transport: {
        type: [Types.ObjectId],
        ref: "Transport",
        required: [true, "Missing transport"],
    },

    longitude: {
        type: String,
        required: [true, "Missing longitude"],
    },

    latitude: {
        type: String,
        required: [true, "Missing latitude"],
    },

    photos: {
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

export const TouristSitesModel = mongoose.model("TouristSites", TousristSitesSchema);