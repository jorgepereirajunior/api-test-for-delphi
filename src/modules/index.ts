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
  ErpProductsModule,
  erpProductSufix
} from './erp-products/erp-products.module'

import { BiStoreModule, biStorePrefix } from './bi-stores/bi-store.module'

import { ApSellerModule, apSellerPrefix } from './ap-seller/ap-seller.module'

@Module({
  imports: [
    ApProductsModule,
    ApSettingsModule,
    EcGroupsModule,
    // ErpProductsModule,
    BiStoreModule,
    ApSellerModule,
    RouterModule.register([
      apProductPrefix,
      apSettingsPrefix,
      ecGroupPrefix,
      // erpProductSufix,
      biStorePrefix,
      apSellerPrefix
    ])
  ]
})
export class Modules {}
