const mongoose = require('mongoose')

const productCollection = 'product'

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
  category: String,
  users: {
    type: Array,
    default: []
  }
})

const Product = mongoose.model(productCollection, productSchema)

module.exports = Product