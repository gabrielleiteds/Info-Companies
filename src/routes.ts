import { Request, Response, Router } from 'express'
import getCompanyByCnpjController from './main/composers/get-company-by-cnpj-controller-composer'

const routes = Router()

routes.post('/getCompany', getCompanyByCnpjController.handle)

export default routes
