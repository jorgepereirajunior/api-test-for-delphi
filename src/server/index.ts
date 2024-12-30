import { NestFactory } from '@nestjs/core'
import { Modules } from '../modules'

async function bootstrap(): Promise<any> {
  const app = await NestFactory.create(Modules)

  return app.listen(3000, () => {
    console.log('================================')
    console.log(`= Server running on port: 4000 =`)
    console.log('================================')
  })
}

const server = { bootstrap }

export default server
