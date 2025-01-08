import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { dataSourceOption } from './web-presale/config'
import { ecommerceDataSourceOption } from './e-commerce/config/data-source-options'
import { dashboardDataSourceOption } from './dashboard/config/data-source-options'

import * as WebEntities from './web-presale/schemas'
import * as WebRepositories from './web-presale/repositories'

import * as EcommerceEntities from './e-commerce/schemas'
import * as EcommerceRepositories from './e-commerce/repositories'

const webEntities = Object.values(WebEntities)
const webRepositories = Object.values(WebRepositories)

const ecommerceEntities = Object.values(EcommerceEntities)
const ecommerceRepositories = Object.values(EcommerceRepositories)

const repositories = [...webRepositories, ...ecommerceRepositories]

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
