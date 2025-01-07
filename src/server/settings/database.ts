import 'dotenv/config'

import { LoggerOptions } from 'typeorm'
import { resolve } from 'path'

const dir = resolve(__dirname, '..', '..')

export const DB_WEB_HOST = process.env.DB_WEB_HOST

export const DB_WEB_PORT = +process.env.DB_WEB_PORT

export const DB_WEB_NAME = process.env.DB_WEB_NAME

export const DB_WEB_USER = process.env.DB_WEB_USER

export const DB_WEB_PASS = process.env.DB_WEB_PASS

export const DB_LOGGING: LoggerOptions = ['error', 'warn']

export const DB_PATH_ENTITIES = `${dir}/infra/database/schemas/*.{ts,js}`

export const DB_PATH_MIGRATIONS = `${dir}/infra/database/migrations/*.{ts,js}`

export const DB_CONN_TIMEOUT = 1000 * 10
