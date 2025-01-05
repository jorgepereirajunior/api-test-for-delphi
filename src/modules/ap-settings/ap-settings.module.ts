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
export class ApSettingsModule {}

export const apSettingsPrefix: RouteTree = {
  path: 'ap/settings',
  module: ApSettingsModule
}
