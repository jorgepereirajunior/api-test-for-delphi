import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

import server from './server'

server.bootstrap()
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule)
//   await app.listen(3000)
// }
// bootstrap()
