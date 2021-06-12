import axios from 'axios'

export default class BrasilIoService {
  async getCompanyAndColaborators (cnpj: String) {
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

    return { companies, colaborators }
  }
}
