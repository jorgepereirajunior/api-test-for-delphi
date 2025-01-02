import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { Modules } from './modules'
import { InfraModule } from './infra'

@Module({
  imports: [Modules, InfraModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
