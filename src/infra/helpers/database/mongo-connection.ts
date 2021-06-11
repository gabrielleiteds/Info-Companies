import mongoose from 'mongoose'

export default class MongoConnection {
  static async connect () {
    return mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
  }

  static async closeConnection () {
    return mongoose.connection.close()
  }
}
