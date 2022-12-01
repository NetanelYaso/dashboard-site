const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Product = new Schema({
    ProductName: { type: String, required: true },
    ProductNumber: { type: Number, required: true }
},
    { timestamps: true }
)

module.exports = mongoose.model("products", Product)
