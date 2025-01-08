import 'dotenv/config'

import { LoggerOptions } from 'typeorm'
import { resolve } from 'path'

const dir = resolve(__dirname, '..', '..')

export const DB_WEB_HOST = process.env.DB_WEB_HOST

export const DB_WEB_PORT = +process.env.DB_WEB_PORT

export const DB_WEB_NAME = process.env.DB_WEB_NAME

export const DB_WEB_USER = process.env.DB_WEB_USER

export const DB_WEB_PASS = process.env.DB_WEB_PASS

export const DB_WEB_PATH_ENTITIES = `${dir}/infra/database/web-presale/schemas/*.schema.{ts,js}`

export const DB_WEB_PATH_MIGRATIONS = `${dir}/infra/database/web-presale/migrations/*.{ts,js}`

export const DB_ECOMMERCE_HOST = process.env.DB_ECOMMERCE_HOST

export const DB_ECOMMERCE_PORT = +process.env.DB_ECOMMERCE_PORT

export const DB_ECOMMERCE_NAME = process.env.DB_ECOMMERCE_NAME

export const DB_ECOMMERCE_USER = process.env.DB_ECOMMERCE_USER

export const DB_ECOMMERCE_PASS = process.env.DB_ECOMMERCE_PASS

export const DB_ECOMMERCE_PATH_ENTITIES = `${dir}/infra/database/e-commerce/schemas/*.schema.{ts,js}`

export const DB_ECOMMERCE_PATH_MIGRATIONS = `${dir}/infra/database/e-commerce/migrations/*.{ts,js}`

export const DB_DASHBOARD_HOST = process.env.DB_DASHBOARD_HOST

export const DB_DASHBOARD_PORT = +process.env.DB_DASHBOARD_PORT

export const DB_DASHBOARD_NAME = process.env.DB_DASHBOARD_NAME

export const DB_DASHBOARD_USER = process.env.DB_DASHBOARD_USER

export const DB_DASHBOARD_PASS = process.env.DB_DASHBOARD_PASS

export const DB_DASHBOARD_PATH_ENTITIES = `${dir}/infra/database/dashboard/schemas/*.schema.{ts,js}`

export const DB_DASHBOARD_PATH_MIGRATIONS = `${dir}/infra/database/dashboard/migrations/*.{ts,js}`

export const DB_LOGGING: LoggerOptions = ['error', 'warn']

export const DB_CONN_TIMEOUT = 1000 * 10
