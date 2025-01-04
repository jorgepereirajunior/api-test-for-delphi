import { Module } from '@nestjs/common'

import { Modules } from './modules'
import { InfraModule } from './infra'

@Module({
  imports: [Modules, InfraModule],
  controllers: [],
  providers: []
})
export class ApiMainModule {}
