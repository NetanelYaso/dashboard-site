const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Order = new Schema({
    orderCategory: { type: String, required: true },
    orderBrand: { type: String, required: true },
    quantity: { type: Number, required: true },
    OrderPerDay: { type: Number, required: true },
    orderPerMonth: { type: Number, required: true },
    orderPerYear: { type: Number, required: true },
    imgLink: { type: String }
},
    { timestamps: true }
)

module.exports = mongoose.model("orders", Order)