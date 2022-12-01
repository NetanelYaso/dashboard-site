const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Sale = new Schema({
    cities: { type: String, required: true },
    profit: { type: Number, required: true },
    numberOfOreder: { type: Number, required: true }
},
    { timestamps: true }
)

module.exports = mongoose.model("sales", Sale)