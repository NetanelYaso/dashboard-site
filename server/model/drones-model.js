const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Drone = new Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    imgLink: { type: String, required: true }
},
    { timestamps: true }
)

module.exports = mongoose.model("drones", Drone)