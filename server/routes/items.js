const express = require("express")
const router = express.Router()
const cors = require("cors")
const uploadPhoto = require("../middlewares/upload")
const { getItem, addItem, updateItem, deleteItem } = require("../controllers/itemsController")

router.get('/', cors(), getItem)

router.post('/', uploadPhoto.array('images'), addItem)

router.put('/:id', updateItem)

router.delete('/:id', deleteItem)

module.exports = router