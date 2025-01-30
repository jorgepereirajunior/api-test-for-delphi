import { DataSourceOptions } from 'typeorm'

import * as Settings from '@server/settings'

// export const ecommerceDataSourceOption: DataSourceOptions = {
//   type: 'mysql',
//   host: Settings.DB_ECOMMERCE_HOST,
//   port: Settings.DB_ECOMMERCE_PORT,
//   database: Settings.DB_ECOMMERCE_NAME,
//   username: Settings.DB_ECOMMERCE_USER,
//   password: Settings.DB_ECOMMERCE_PASS,
//   entities: [Settings.DB_ECOMMERCE_PATH_ENTITIES],
//   migrations: [Settings.DB_ECOMMERCE_PATH_MIGRATIONS],
//   logging: Settings.DB_LOGGING,
//   connectTimeout: Settings.DB_CONN_TIMEOUT
// }

export const ecommerceDataSourceOption: DataSourceOptions = {
  type: 'mssql',
  host: Settings.DB_ECOMMERCE_HOST,
  port: Settings.DB_ECOMMERCE_PORT,
  database: Settings.DB_ECOMMERCE_NAME,
  username: Settings.DB_ECOMMERCE_USER,
  password: Settings.DB_ECOMMERCE_PASS,
  entities: [Settings.DB_ECOMMERCE_PATH_ENTITIES],
  migrations: [Settings.DB_ECOMMERCE_PATH_MIGRATIONS],
  logging: Settings.DB_LOGGING,
  options: {
    connectTimeout: Settings.DB_CONN_TIMEOUT,
    encrypt: false
  }
}
