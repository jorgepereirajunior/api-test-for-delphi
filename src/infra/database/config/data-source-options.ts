import { DataSourceOptions } from 'typeorm'

import * as Settings from '@server/settings'

export const dataSourceOption: DataSourceOptions = {
  type: 'mysql',
  host: Settings.DB_HOST,
  port: Settings.DB_PORT,
  database: Settings.DB_NAME,
  username: Settings.DB_USER,
  password: Settings.DB_PASS,
  logging: Settings.DB_LOGGING,
  entities: [Settings.DB_PATH_ENTITIES],
  migrations: [Settings.DB_PATH_MIGRATIONS],
  connectTimeout: Settings.DB_CONN_TIMEOUT
}
