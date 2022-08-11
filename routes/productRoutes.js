const express = require('express')
const router = express.Router()
const {
  getAllProduct,
  getProductById,
  addProduct,
  editProductById,
  deleteProduct
} = require('../controllers/productHandler');

router.get('/', getAllProduct)
router.get('/:id', getProductById)
router.post('/', addProduct)
router.put('/:id', editProductById)
router.delete('/:id', deleteProduct)

module.exports = router
