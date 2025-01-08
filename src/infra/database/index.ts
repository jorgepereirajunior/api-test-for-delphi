import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { dataSourceOption } from './config'

import * as WebEntities from './schemas/pre-sale'
import * as Repositories from './repositories'

const webEntities = Object.values(WebEntities)
const repositories = Object.values(Repositories)

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...dataSourceOption,
      name: 'webConnection'
    }),
    TypeOrmModule.forFeature(webEntities, 'webConnection')
  ],
  exports: repositories,
  providers: repositories
})
export class DatabaseModule {}
