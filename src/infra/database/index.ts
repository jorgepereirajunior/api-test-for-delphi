import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { dataSourceOption } from './config'

import * as Entities from './schemas'
import * as Repositories from './repositories'

const entities = Object.values(Entities)
const repositories = Object.values(Repositories)

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOption),
    TypeOrmModule.forFeature(entities)
  ],
  exports: repositories,
  providers: repositories
})
export class DatabaseModule {}
