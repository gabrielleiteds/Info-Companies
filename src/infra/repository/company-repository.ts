import companySchema from '../helpers/mongoose/schemas/company-schema'

export default class CompanyRepository {
  async getCompanyByCnpj (cnpj: String) {
    return await companySchema.findOne({ cnpj }).populate('colaborators')
  }
}
