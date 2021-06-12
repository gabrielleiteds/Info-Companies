import companySchema from '../helpers/mongoose/schemas/company-schema'
import ICompany from '../../domain/interface/interface-company'
export default class CompanyRepository {
  async getCompanyByCnpj (cnpj: String) {
    return await companySchema.findOne({ cnpj })
  }

  async create (company: ICompany) {
    return await companySchema.create(company)
  }
}
