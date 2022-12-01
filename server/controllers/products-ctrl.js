const productModel = require("../model/products-model");

const getAll = async (req, res) => {
    await productModel.find({})
        .then((products, error) => {
            if (error) {
                return res.status(400).json({ success: false, error });
            }
            if (products.length === 0) {
                return res.json({ success: false, massage: "no products found" });
            }
            res.status(200).json({ success: true, products })
        })
}

const getById = async (req, res) => {
    await productModel.findById(req.params.id)
        .then((product) => {
            if (!product) {
                return res.json({ success: false, massage: "product is not found" });
            }
            return res.status(200).json({ success: true, product });
        })
        .catch(error => res.status(400).json({ success: false, error }))
}

const create = async (req, res) => {
    await productModel.insertMany(req.body.product)
        .then((result) => res.status(300).json({ success: true, massage: result }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const update = async (req, res) => {
    productModel.findByIdAndUpdate(req.body.product)
        .then((products) => res.status(200).json({ sucsess: true, products }))
        .catch(error => res.status(400).json({ success: false, error }))
}

const deleteProduct = async (req, res) => {
    await productModel.findByIdAndDelete(req.params.id)
        .then(products => res.status(200).json({ success: true, products }))
        .catch(error => res.status(400).json({ success: false, error }))
}
module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteProduct
}