const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
require("./DB")

const productsRouter = require("./routes/products-routes");
const ordersRouter = require("./routes/orders-routes")
const salesRouter = require("./routes/sales-routes")
app.use(express.json({ extened: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/products", productsRouter);
app.use("/orders", ordersRouter);
app.use("/sales", salesRouter);


app.get("/", (req, res) => {
    res.send({ message: "ayo whatsup" });
})

app.listen(port, () => {
    console.log(`server is up at port : ${port}`);
})