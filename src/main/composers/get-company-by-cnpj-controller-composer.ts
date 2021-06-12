import GetCompanyByCnpj from '../../domain/usecase/company/get-company-by-cnpj'
import ColaboratorRepository from '../../infra/repository/colaborator-repository'
import CompanyRepository from '../../infra/repository/company-repository'
import GetCompanyByCnpjController from '../../presentation/controllers/get-company-by-cnpj-controller'
import ValidatorCnpj from '../../utils/validator-cnpj'

const validatorCnpj = new ValidatorCnpj()
const companyRepository = new CompanyRepository()
const colaboratorRepository = new ColaboratorRepository()
const getCompanyByCnpjUseCase = new GetCompanyByCnpj(companyRepository, validatorCnpj, colaboratorRepository)
const getCompanyByCnpjController = new GetCompanyByCnpjController(getCompanyByCnpjUseCase)

export default getCompanyByCnpjController
