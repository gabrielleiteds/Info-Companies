import colaboratorSchema from '../helpers/mongoose/schemas/colaborator-schema'
import IColaborator from '../../domain/interface/interface-colaborator'

export default class ColaboratorRepository {
  async getColaborators (companyId: String) {
    return await colaboratorSchema.findOne({ company: companyId })
  }

  async createColaborators (colaborator: IColaborator) {
    return await colaboratorSchema.insertMany(colaborator)
  }
}
