import { DataSource } from 'typeorm'

import { resolve } from 'path'

const dir = resolve(__dirname, '..')

export const dataSource = new DataSource({
  type: 'mysql',
  host: 'mysql_delphiapi_coupled',
  port: 3306,
  database: 'delphi_api',
  username: 'root',
  password: 'root',
  logging: ['error', 'warn'],
  entities: [`${dir}/schemas/*.{ts,js}`],
  migrations: [`${dir}/migrations/*.{ts,js}`],
  connectTimeout: 1000 * 10
})
