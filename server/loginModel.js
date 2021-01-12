const mongoose = require('mongoose')

const LoginSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Login', LoginSchema)