import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { dataSourceOption } from './config'
import { ecommerceDataSourceOption } from './e-commerce/config/data-source-options'
import { dashboardDataSourceOption } from './dashboard/config/data-source-options'

import * as WebEntities from './schemas/pre-sale'
import * as Repositories from './repositories'

import * as EcommeceEntities from './e-commerce/schemas'

const webEntities = Object.values(WebEntities)
const repositories = Object.values(Repositories)

const ecommerceEntities = Object.values(EcommeceEntities)
@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSourceOption,
      name: 'webConnection'
    }),
    TypeOrmModule.forFeature(webEntities, 'webConnection'),
    //
    TypeOrmModule.forRoot({
      ...ecommerceDataSourceOption,
      name: 'ecommerceConnection'
    }),
    TypeOrmModule.forFeature(ecommerceEntities, 'ecommerceConnection'),
    //
    TypeOrmModule.forRoot({
      ...dashboardDataSourceOption,
      name: 'dashboardConnection'
    })
  ],
  exports: repositories,
  providers: repositories
})
export class DatabaseModule {}
