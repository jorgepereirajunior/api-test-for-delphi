import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { dataSourceOption } from './web-presale/config'
import { ecommerceDataSourceOption } from './e-commerce/config/data-source-options'
import { dashboardDataSourceOption } from './dashboard/config/data-source-options'
import { erpLocalDataSourceOption } from './erp-local/config/data-source-options'

import * as WebEntities from './web-presale/schemas'
import * as WebRepositories from './web-presale/repositories'

import * as EcommerceEntities from './e-commerce/schemas'
import * as EcommerceRepositories from './e-commerce/repositories'

import * as DashboardEntities from './dashboard/schemas'
import * as DashboardRepositories from './dashboard/repositories'

const webEntities = Object.values(WebEntities)
const webRepositories = Object.values(WebRepositories)

const ecommerceEntities = Object.values(EcommerceEntities)
const ecommerceRepositories = Object.values(EcommerceRepositories)

const dashboardEntities = Object.values(DashboardEntities)
const dashboardRepositories = Object.values(DashboardRepositories)

const repositories = [
  ...webRepositories,
  ...ecommerceRepositories,
  ...dashboardRepositories
]

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
    }),
    TypeOrmModule.forFeature(dashboardEntities, 'dashboardConnection'),
    //
    TypeOrmModule.forRoot({
      ...erpLocalDataSourceOption,
      name: 'erpLocalConnection'
    })
  ],
  exports: repositories,
  providers: repositories
})
export class DatabaseModule {}
