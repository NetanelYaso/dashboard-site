const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String },
    categoryType: { type: String },
    price: { type: Number },
    company: { type: String }
},
    { timestamps: true }
)

module.exports = mongoose.model("products", Product)
