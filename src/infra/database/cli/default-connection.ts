import { DataSource } from 'typeorm'

import * as Settings from '@server/settings'

export const dataSource = new DataSource({
  type: 'mysql',
  host: Settings.DB_WEB_HOST,
  port: Settings.DB_WEB_PORT,
  database: Settings.DB_WEB_NAME,
  username: Settings.DB_WEB_USER,
  password: Settings.DB_WEB_PASS,
  logging: Settings.DB_LOGGING,
  entities: [Settings.DB_PATH_ENTITIES],
  migrations: [Settings.DB_PATH_MIGRATIONS],
  connectTimeout: Settings.DB_CONN_TIMEOUT
})
