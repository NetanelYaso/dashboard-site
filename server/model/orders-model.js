const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Order = new Schema({
    orderDate: { type: String, required: true },
    orderCategory: { type: String, required: true },
    quntityOrder: { type: Number, required: true },
    profit: { type: Number, required: true },
    orderNumber:{type:Number,}
},
    { timestamps: true }
)

module.exports = mongoose.model("orders", Order);