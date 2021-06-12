export default class ValidatorCnpj {
  validate (cnpj: String) {
    cnpj = cnpj.replace(/[^\d]+/g,'')

    if (cnpj === '') return false

    if (cnpj.length !== 14) { return false }

    // Eliminar CNPJs invalidos
    const invalidCnpjs = [
      '00000000000000',
      '11111111111111',
      '22222222222222',
      '33333333333333',
      '44444444444444',
      '55555555555555',
      '66666666666666',
      '77777777777777',
      '88888888888888',
      '99999999999999'
    ]
    if (invalidCnpjs.find(invalidCnpj => invalidCnpj === cnpj)) { return false }

    // Validar DVs
    let size = cnpj.length - 2
    let numbers = cnpj.substring(0,size)
    const digits = cnpj.substring(size)
    let sum = 0
    let pos = size - 7
    for (let i = size; i >= 1; i--) {
      sum += numbers.charAt(size - i) * pos--
      if (pos < 2) { pos = 9 }
    }
    let resultado = sum % 11 < 2 ? 0 : 11 - sum % 11
    if (+resultado !== +digits.charAt(0)) { return false }

    size = size + 1
    numbers = cnpj.substring(0,size)
    sum = 0
    pos = size - 7
    for (let i = size; i >= 1; i--) {
      sum += numbers.charAt(size - i) * pos--
      if (pos < 2) { pos = 9 }
    }
    resultado = sum % 11 < 2 ? 0 : 11 - sum % 11
    if (+resultado !== +digits.charAt(1)) { return false }

    return true
  }
}
