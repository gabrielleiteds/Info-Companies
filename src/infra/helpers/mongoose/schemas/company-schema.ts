import mongoose, { Schema } from 'mongoose'

const CompanySchema = new Schema({
  cnpj: {
    type: Schema.Types.String
  },
  colaborators: {
    type: Schema.Types.Array
  },
  uf: {
    type: Schema.Types.String
  },
  reasonSocial: [{
    type: Schema.Types.ObjectId,
    ref: 'colaborators'
  }]
})

export default mongoose.model('companies', CompanySchema)
