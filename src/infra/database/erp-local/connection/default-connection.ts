import { DataSource } from 'typeorm'

import * as Settings from '@server/settings'

export const erpLocalDataSource = new DataSource({
  type: 'mssql',
  host: Settings.DB_ERP_HOST,
  port: Settings.DB_ERP_PORT,
  database: Settings.DB_ERP_NAME,
  username: Settings.DB_ERP_USER,
  password: Settings.DB_ERP_PASS,
  entities: [Settings.DB_ERP_PATH_ENTITIES],
  migrations: [Settings.DB_ERP_PATH_MIGRATIONS],
  logging: Settings.DB_LOGGING,
  options: {
    connectTimeout: Settings.DB_CONN_TIMEOUT,
    encrypt: false
  }
})
