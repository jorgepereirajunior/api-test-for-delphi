import { NestFactory } from '@nestjs/core'
// import { Modules } from '../modules'

import { PORT } from './settings'
import { AppModule } from '../app.module'

async function bootstrap(): Promise<any> {
  const app = await NestFactory.create(AppModule)

  return app.listen(PORT, () => {
    console.log('========================================')
    console.log(`= Server running on port: ${PORT} -> 4000 =`)
    console.log('========================================')
  })
}

const server = { bootstrap }

export default server
