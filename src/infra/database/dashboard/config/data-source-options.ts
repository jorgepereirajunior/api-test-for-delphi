import { DataSourceOptions } from 'typeorm'

import * as Settings from '@server/settings'

// export const dashboardDataSourceOption: DataSourceOptions = {
//   type: 'mysql',
//   host: Settings.DB_DASHBOARD_HOST,
//   port: Settings.DB_DASHBOARD_PORT,
//   database: Settings.DB_DASHBOARD_NAME,
//   username: Settings.DB_DASHBOARD_USER,
//   password: Settings.DB_DASHBOARD_PASS,
//   logging: Settings.DB_LOGGING,
//   entities: [Settings.DB_DASHBOARD_PATH_ENTITIES],
//   migrations: [Settings.DB_DASHBOARD_PATH_MIGRATIONS],
//   connectTimeout: Settings.DB_CONN_TIMEOUT
// }

export const dashboardDataSourceOption: DataSourceOptions = {
  type: 'mssql',
  host: Settings.DB_DASHBOARD_HOST,
  port: Settings.DB_DASHBOARD_PORT,
  database: Settings.DB_DASHBOARD_NAME,
  username: Settings.DB_DASHBOARD_USER,
  password: Settings.DB_DASHBOARD_PASS,
  entities: [Settings.DB_DASHBOARD_PATH_ENTITIES],
  migrations: [Settings.DB_DASHBOARD_PATH_MIGRATIONS],
  logging: Settings.DB_LOGGING,
  options: {
    connectTimeout: Settings.DB_CONN_TIMEOUT,
    encrypt: false
  }
}
