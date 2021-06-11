import path from 'path'
import * as dotenv from 'dotenv'

const environment = process.env.NODE_ENV || 'localhost'
const envPath = path.join(__dirname, '..', 'env', environment + '.env')

dotenv.config({ path: envPath })
