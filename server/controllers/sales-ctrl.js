const salesModel = require("../model/sales-model");

const getAll = async (req, res) => {
    await salesModel.find({})
        .then((sales, error) => {
            if (error) {
                return res.satus(400).json({ success: false, error })
            }
            if (sales.length == 0) {
                return res.json({ success: true, massage: "no sales avalible" })
            }
            return res.satus(200).json({ success: true, sales })
        })
}

const getById = async () => {
    await salesModel.findById(req.params.id)
        .then((sale) => {
            if (!sale) {
                return res.json({ success: false, massage: "sale not found" });
            }
            return res.status(200).json({ success: true, sale })
        })
        .catch(error => res.status(400).json({ success: false, error }))
}

const create = async () => {
    await salesModel.insertMany(req.body.id)
        .then((result) => res.status(200).json({ success: true, result }))
        .catch((error) => res.status(400).json({ success: false, error }))
}

const update = async () => {
    await salesModel.findByIdAndUpdate(req.body.id)
        .then((sales) => res.status(200).json({ success: true, sales }))
        .catch((error) => res.status(400).json({ success: false, error }))
}

const deleteSale = async () => {
    await salesModel.findByIdAndDelete(req.body.id)
        .then((sale) => res.status(200).json({ success: true, sale }))
        .catch((error) => res.status(400).json({ success: false, error }))
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteSale
}