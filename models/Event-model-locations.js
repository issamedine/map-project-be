const mongoose = require("mongoose");

const eventLocationSchema = new mongoose.Schema(
    {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        },
    },
    { timestamps: true }
);

let EventModelLocation = mongoose.model("locations", eventLocationSchema);

module.exports = EventModelLocation;