import { Module } from '@nestjs/common'
import { RouteTree } from '@nestjs/core'

import { InfraModule } from '@src/infra'

import * as Controllers from './controllers/http'
import * as UseCases from './use-cases'

const controllers = Object.values(Controllers)
const useCases = Object.values(UseCases)

@Module({
  imports: [InfraModule],
  controllers,
  providers: useCases,
  exports: useCases
})
export class BiStoreModule {}

export const biStorePrefix: RouteTree = {
  path: 'bi/store',
  module: BiStoreModule
}
