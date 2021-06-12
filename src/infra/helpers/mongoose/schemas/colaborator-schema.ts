import mongoose, { Schema } from 'mongoose'

const ColaboratorSchema = new Schema({
  identity: {
    type: Schema.Types.String
  },
  name: {
    type: Schema.Types.Array
  },
  qualification: {
    type: Schema.Types.String
  },
  typePartner: {
    type: Schema.Types.String
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'companies'
  }
})

export default mongoose.model('colaborators', ColaboratorSchema)
