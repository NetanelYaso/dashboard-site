const router = require("express").Router();
const {
    getAll,
    getById,
    create,
    update,
    deleteSale
} = require("../controllers/sales-ctrl");


router.get("/", getAll);
router.get("/byId", getById);
router.post("/saveData", create);
router.put("/update", update);
router.delete("/delete", deleteSale);

module.exports = router;