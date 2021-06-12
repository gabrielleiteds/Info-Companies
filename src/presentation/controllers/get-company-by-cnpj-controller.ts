import { Response, Request } from 'express'
import GetCompanyByCnpj from '../../domain/usecase/company/get-company-by-cnpj'

export default class GetCompanyByCnpjController {
  private readonly getCompanyByCnpjUseCase: GetCompanyByCnpj
  constructor (getCompanyByCnpjUseCase: GetCompanyByCnpj) {
    this.getCompanyByCnpjUseCase = getCompanyByCnpjUseCase
    this.handle = this.handle.bind(this)
  }

  async handle (req: Request, res: Response): Promise<any> {
    const { cnpj } = req.body

    const response = await this.getCompanyByCnpjUseCase.get(cnpj)

    return res.status(200).send(response)
  }
}
