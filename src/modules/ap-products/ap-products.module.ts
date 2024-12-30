import { Module } from '@nestjs/common'
import { RouteTree } from '@nestjs/core'

import { ApProductsController } from './ap-products.controller'
import { ApProductsService } from './ap-products.service'

@Module({
  controllers: [ApProductsController],
  providers: [ApProductsService]
})
export class ApProductsModule {}

export const apProductPrefix: RouteTree = {
  path: 'ap/product',
  module: ApProductsModule
}
