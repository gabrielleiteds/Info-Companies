import CompanyRepository from '../../../infra/repository/company-repository'
import ValidatorCnpj from '../../../utils/validator-cnpj'
import axios from 'axios'
import ColaboratorRepository from '../../../infra/repository/colaborator-repository'

export default class GetCompanyByCnpj {
  private readonly companyRepository: CompanyRepository
  private readonly colaboratorRepository: ColaboratorRepository
  private readonly validatorCnpj: ValidatorCnpj
  constructor (companyRepository: CompanyRepository, validatorCnpj: ValidatorCnpj, colaboratorRepository: ColaboratorRepository) {
    this.companyRepository = companyRepository
    this.validatorCnpj = validatorCnpj
    this.colaboratorRepository = colaboratorRepository
  }

  async get (cnpj: String): Promise<any> {
    if (!this.validatorCnpj.validate(cnpj)) {
      throw new Error('Invalid parameter')
    }

    const findCompany = await this.companyRepository.getCompanyByCnpj(cnpj)

    if (!findCompany) {
      const keyToken = process.env.TOKEN

      const [companies, colaborators] = await Promise.all([
        axios.get(`https://api.brasil.io/v1/dataset/socios-brasil/empresas/data?cnpj=${cnpj}`, {
          headers: {
            Authorization: `Token ${keyToken}`
          }
        }),
        axios.get(`https://api.brasil.io/v1/dataset/socios-brasil/socios/data?cnpj=${cnpj}`, {
          headers: {
            Authorization: `Token ${keyToken}`
          }
        })
      ])

      const formatColaborators = colaborators.data.results.map(colaborator => {
        return {
          identity: colaborator.cpf_cnpj_socio,
          name: colaborator.nome_socio,
          qualification: colaborator.qualificacao_socio,
          typePartner: colaborator.tipo_socio,
          companyCnpj: colaborator.cnpj
        }
      })
      // evita de bater duas vezes no banco para criar duas coisas diferentes
      const [company] = await Promise.all([
        this.companyRepository.create({
          cnpj: companies.data.results[0].cnpj,
          uf: companies.data.results[0].uf,
          reasonSocial: companies.data.results[0].razao_social,
          colaborators: formatColaborators
        }),
        this.colaboratorRepository.createColaborators(formatColaborators)
      ])

      return { companies: company }
    }

    return findCompany
  }
}
