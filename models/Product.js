// import mongoose
const mongoose = require('mongoose')

// buat schema
const Product = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

//exports model
module.exports = mongoose.model('Products', Product)
