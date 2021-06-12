import mongoose, { Schema } from 'mongoose'

const CompanySchema = new Schema({
  cnpj: {
    type: Schema.Types.String
  },
  colaborators: [{
    type: Schema.Types.ObjectId,
    ref: 'colaborators'
  }],
  uf: {
    type: Schema.Types.String
  },
  reasonSocial: {
    type: Schema.Types.String
  }
})

export default mongoose.model('companies', CompanySchema)
