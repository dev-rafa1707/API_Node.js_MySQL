const express = require("express")
const controller = require("./controllers/controller")

const router = express.Router()


router.get("/register", controller.register)

router.get("/",controller.getAll)
router.get("/:id", controller.getById)
router.post("/", controller.create)
router.put("/:id", controller.update)
router.delete("/:id", controller.delete)


module.exports = router
