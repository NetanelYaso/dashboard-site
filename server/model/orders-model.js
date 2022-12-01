const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Order = new Schema({
    orderDate: { type: Date, required: true },
    orderCategory: { type: String, required: true },
    quntityOrder: { type: Number, required: true },
    profit: { type: Number, required: true }
},
    { timestamps: true }
)

module.exports = mongoose.model("orders", Order)