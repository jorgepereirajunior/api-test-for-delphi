import { Module } from '@nestjs/common'
import { RouterModule } from '@nestjs/core'

import {
  apProductPrefix,
  ApProductsModule
} from './ap-products/ap-products.module'

@Module({
  imports: [ApProductsModule, RouterModule.register([apProductPrefix])]
})
export class Modules {}
