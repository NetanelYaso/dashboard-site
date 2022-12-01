const router = require("express").Router()
const {
    getAll,
    getById,
    create,
    update,
    deleteOrder
}= require("../controllers/orders-ctrl")

router.get("/",getAll);
router.get("/byId",getById);
router.post("/saveData",create);
router.put("/update",update);
router.delete("/delete",deleteOrder)


module.exports = router;