const router = require("express").Router();
const {
    getAll,
    getById,
    create,
    update
} = require("../controllers/products-ctrl");


router.get("/", getAll);
router.get("/byId", getById);
router.post("/saveData",create);
router.put("/update",update);

module.exports = router;