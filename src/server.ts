import path from 'path'
import * as dotenv from 'dotenv'
import app from './api'
import MongoConnection from './infra/helpers/database/mongo-connection'

const environment = process.env.NODE_ENV || 'localhost'
const envPath = path.join(__dirname, '..', 'env', environment + '.env')

dotenv.config({ path: envPath })

MongoConnection.connect()

const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log(`Server ${process.env.NODE_ENV} ready on PORT ${port}`)
})
