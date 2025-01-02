import { Module } from '@nestjs/common'
import { RouteTree } from '@nestjs/core'

import * as Controllers from './controllers/http'
import * as UseCases from './use-cases'
import { InfraModule } from 'src/infra'

const controllers = Object.values(Controllers)
const useCases = Object.values(UseCases)
@Module({
  imports: [InfraModule],
  controllers,
  exports: useCases,
  providers: useCases
})
export class ApProductsModule {}

export const apProductPrefix: RouteTree = {
  path: 'ap/product',
  module: ApProductsModule
}
