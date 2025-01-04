import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'

import { ApiMainModule } from '../api-main.module'

import { swaggerConfig } from 'src/docs/swagger-config'

import { PORT } from './settings'

async function bootstrap(): Promise<any> {
  const app = await NestFactory.create<NestExpressApplication>(ApiMainModule)

  swaggerConfig(app)

  return app.listen(PORT, () => {
    console.log('========================================')
    console.log(`= Server running on port: ${PORT} -> 4000 =`)
    console.log('========================================')
  })
}

const server = { bootstrap }

export default server
