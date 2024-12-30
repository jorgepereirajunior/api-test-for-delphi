import { Module } from '@nestjs/common'
import { ApProductsModule } from './ap-products/ap-products.module'

@Module({
  imports: [ApProductsModule]
})
export class Modules {}
