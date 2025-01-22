const express = require('express')
const { getAllData, getAllDataById, deleteById, postData } = require('../controller/controller')
const router = express.Router()


router.get("/", getAllData)
router.get("/:id",getAllDataById)
router.delete("/:id",deleteById)
router.post("/", postData)


module.exports = router