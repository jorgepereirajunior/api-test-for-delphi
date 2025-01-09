import { Module } from '@nestjs/common'
import { RouterModule } from '@nestjs/core'

import {
  apProductPrefix,
  ApProductsModule
} from './ap-products/ap-products.module'

import {
  ApSettingsModule,
  apSettingsPrefix
} from './ap-settings/ap-settings.module'

import { EcGroupsModule, ecGroupPrefix } from './ec-groups/ec-group.module'

import {
  BiProductsModule,
  biProductPrefix
} from './bi-products/bi-products.module'

@Module({
  imports: [
    ApProductsModule,
    ApSettingsModule,
    EcGroupsModule,
    BiProductsModule,
    RouterModule.register([
      apProductPrefix,
      apSettingsPrefix,
      ecGroupPrefix,
      biProductPrefix
    ])
  ]
})
export class Modules {}
