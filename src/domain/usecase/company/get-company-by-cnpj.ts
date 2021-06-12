import fetch from 'cross-fetch'
import CompanyRepository from '../../../infra/repository/company-repository'
import ValidatorCnpj from '../../../utils/validator-cnpj'

export default class GetCompanyByCnpj {
  private readonly companyRepository: CompanyRepository
  private readonly validatorCnpj: ValidatorCnpj
  constructor (companyRepository: CompanyRepository, validatorCnpj: ValidatorCnpj) {
    this.companyRepository = companyRepository
    this.validatorCnpj = validatorCnpj
  }

  async get (cnpj: String): Promise<any> {
    if (!this.validatorCnpj.validate(cnpj)) {
      throw new Error('Invalid parameter')
    }

    const findCompany = await this.companyRepository.getCompanyByCnpj(cnpj)

    if (!findCompany) {
      const response = await fetch(`https://api.brasil.io/v1/dataset/socios-brasil/empresas/data?cnpj=${cnpj}`, {
        method: 'get',
        headers: {
          Authorization: `Token ${process.env.PORT}`
        }
      }).then(async result => result.json())

      return response
    }

    return findCompany
  }
}
