import { Module } from '@nestjs/common'

import { InfraModule } from '@src/infra'

import * as Controllers from './controllers/http'
import * as UseCases from './use-cases'
import { RouteTree } from '@nestjs/core'

const controllers = Object.values(Controllers)
const useCases = Object.values(UseCases)

@Module({
  imports: [InfraModule],
  controllers,
  providers: useCases,
  exports: useCases
})
export class ErpProductsModule {}

export const erpProductSufix: RouteTree = {
  path: 'erp/product',
  module: ErpProductsModule
}
