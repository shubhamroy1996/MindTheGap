import mongoose from 'mongoose'

async function connectToDB() {
  try{
    mongoose.connect(process.env.MONGO_URI)

  } catch (err) {
    console.log(err)
  }

  console.log("connected to database")
}

export default connectToDB