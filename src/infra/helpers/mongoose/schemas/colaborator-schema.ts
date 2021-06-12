import mongoose, { Schema } from 'mongoose'

const ColaboratorSchema = new Schema({
  identity: {
    type: Schema.Types.String
  },
  name: {
    type: Schema.Types.String
  },
  qualification: {
    type: Schema.Types.String
  },
  typePartner: {
    type: Schema.Types.String
  },
  companyCnpj: {
    type: Schema.Types.String
  }
})

export default mongoose.model('colaborators', ColaboratorSchema)
