import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, 'username already taken'],
    required: true
  },

  emai: {
    type: String,
    unique: [true, 'Account already exist with this email address'],
    required: true
  },

  password: {
    type: String,
    required: true
  }
})

const userModel = mongoose.model('users', userSchema)

export default userModel