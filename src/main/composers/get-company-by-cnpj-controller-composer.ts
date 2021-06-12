import GetCompanyByCnpj from '../../domain/usecase/company/get-company-by-cnpj'
import ColaboratorRepository from '../../infra/repository/colaborator-repository'
import CompanyRepository from '../../infra/repository/company-repository'
import BrasilIoService from '../../infra/services/brasil-io-service'
import GetCompanyByCnpjController from '../../presentation/controllers/get-company-by-cnpj-controller'
import ValidatorCnpj from '../../utils/validator-cnpj'

const validatorCnpj = new ValidatorCnpj()
const companyRepository = new CompanyRepository()
const colaboratorRepository = new ColaboratorRepository()
const brasilIoService = new BrasilIoService()
const getCompanyByCnpjUseCase = new GetCompanyByCnpj(companyRepository, brasilIoService, validatorCnpj, colaboratorRepository)
const getCompanyByCnpjController = new GetCompanyByCnpjController(getCompanyByCnpjUseCase)

export default getCompanyByCnpjController
