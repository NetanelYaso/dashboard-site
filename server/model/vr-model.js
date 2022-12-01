const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Vr = new Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    company: { type: String, required: true },
    price: { type: Number, required: true },
    quntity: { type: Number, required: true },
    imgLink: { type: String, required: true }
},
    { timestamps: true }
)

module.exports = mongoose.model("vr", Vr)