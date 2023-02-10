const mongoose = require('mongoose')

const userCollection = 'user'

const userSchema = mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  lastname: String,
  isActive: {
    type: Boolean,
    default: true
  },
  products: {
    type: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'product'
        }
      }
    ]
  }
})

userSchema.pre('findOne', function () {
  this.populate('products.product')
})

const User = mongoose.model(userCollection, userSchema)

module.exports = User