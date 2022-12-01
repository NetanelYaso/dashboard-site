const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Tv = new Schema({
    name: { type: String, require: true },
    brand: { type: String, require: true },
    company: { type: String, require: true },
    price: { type: Number, require: true },
    quantity: { type: Number, require: true },
    imgLink: { type: String, require: true }
})

module.exports = mongoose.model("tvs",Tv)