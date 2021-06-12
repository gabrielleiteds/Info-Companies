import GetCompanyByCnpj from '../../domain/usecase/company/get-company-by-cnpj'
import CompanyRepository from '../../infra/repository/company-repository'
import GetCompanyByCnpjController from '../../presentation/get-company-by-cnpj-controller'
import ValidatorCnpj from '../../utils/validator-cnpj'

const validatorCnpj = new ValidatorCnpj()
const companyRepository = new CompanyRepository()
const getCompanyByCnpjUseCase = new GetCompanyByCnpj(companyRepository, validatorCnpj)
const getCompanyByCnpjController = new GetCompanyByCnpjController(getCompanyByCnpjUseCase)

export default getCompanyByCnpjController
