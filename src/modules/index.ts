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

@Module({
  imports: [
    ApProductsModule,
    ApSettingsModule,
    EcGroupsModule,
    RouterModule.register([apProductPrefix, apSettingsPrefix, ecGroupPrefix])
  ]
})
export class Modules {}
