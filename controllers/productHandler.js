const Product = require('../models/Product.js')

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find()
    res.json({
      status: 'Success',
      data: products
    })
  } catch (err) {
    res.status(500)
    res.json({
      status: 'Failed',
      message: err.message
    })
  }
}

const getProductById = async (req, res) => {
  try{
    const productById = await Product.findById(req.params.id)
    res.json({
      status: 'Success',
      data: productById
    })
  } catch (err) {
    res.status(400)
    res.json({
      status: 'Failed',
      message: err.message
    })
  }
}

const addProduct = async (req, res) => {
  const product = new Product(req.body)
  try {
    const savedProduct = await product.save()
    res.status(201)
    res.json({
      status: 'Success',
      data: savedProduct
    })
  } catch (err) {
    res.status(400)
    res.json({
      status: 'Failed',
      message: err.message
    })
  }
}

const editProductById = async (req, res) => {
  const cekId = await Product.findById(req.params.id)
  if(!cekId) {
      res.status(404)
      res.json({
        status: 'Failed',
        message: 'data tidak ditemukan'
      })
    }
  try {
    const updatedProduct = await Product.updateOne(
      {_id: req.params.id},
      {$set: req.body}
    )
    res.status(200)
    res.json({
      status: 'Success',
      data: updatedProduct
    })
  } catch (err) {
    res.status(400)
    res.json({
      status: 'Failed',
      message: err.message
    })
  }
}

const deleteProduct = async(req, res) => {
  const cekId = await Product.findById(req.params.id)
  if(cekId) {
    const deletedProduct = await Product.deleteOne(
      {_id: req.params.id}
    )
    res.status(200)
    res.json({
      status: 'Success',
      data: deletedProduct
    })
  } else {
    res.status(400)
    res.json({
      status: 'Failed',
      message: 'tidak dapat menghapus data'
    })
  }
}

module.exports = {
  getAllProduct,
  getProductById,
  addProduct,
  editProductById,
  deleteProduct
}
