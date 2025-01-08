import { DataSource } from 'typeorm'

import * as Settings from '@server/settings'

export const ecommerceDataSource = new DataSource({
  type: 'mysql',
  host: Settings.DB_DASHBOARD_HOST,
  port: Settings.DB_DASHBOARD_PORT,
  database: Settings.DB_DASHBOARD_NAME,
  username: Settings.DB_DASHBOARD_USER,
  password: Settings.DB_DASHBOARD_PASS,
  entities: [Settings.DB_DASHBOARD_PATH_ENTITIES],
  migrations: [Settings.DB_DASHBOARD_PATH_MIGRATIONS],
  logging: Settings.DB_LOGGING,
  connectTimeout: Settings.DB_CONN_TIMEOUT
})
