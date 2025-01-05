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

@Module({
  imports: [
    ApProductsModule,
    ApSettingsModule,
    RouterModule.register([apProductPrefix, apSettingsPrefix])
  ]
})
export class Modules {}
