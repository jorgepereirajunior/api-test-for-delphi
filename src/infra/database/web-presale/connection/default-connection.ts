import { DataSource } from 'typeorm'

import * as Settings from '@server/settings'

export const webDataSource = new DataSource({
  type: 'mssql',
  host: Settings.DB_WEB_HOST,
  port: Settings.DB_WEB_PORT,
  database: Settings.DB_WEB_NAME,
  username: Settings.DB_WEB_USER,
  password: Settings.DB_WEB_PASS,
  entities: [Settings.DB_WEB_PATH_ENTITIES],
  migrations: [Settings.DB_WEB_PATH_MIGRATIONS],
  logging: Settings.DB_LOGGING,
  options: {
    connectTimeout: Settings.DB_CONN_TIMEOUT,
    encrypt: false
  }
})
