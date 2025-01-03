import 'dotenv/config'

import { LoggerOptions } from 'typeorm'
import { resolve } from 'path'

const dir = resolve(__dirname, '..', '..')

export const DB_HOST = process.env.DB_HOST

export const DB_PORT = +process.env.DB_PORT

export const DB_NAME = process.env.DB_NAME

export const DB_USER = process.env.DB_USER

export const DB_PASS = process.env.DB_PASS

export const DB_LOGGING: LoggerOptions = ['error', 'warn']

export const DB_PATH_ENTITIES = `${dir}/infra/database/schemas/*.{ts,js}`

export const DB_PATH_MIGRATIONS = `${dir}/infra/database/migrations/*.{ts,js}`

export const DB_CONN_TIMEOUT = 1000 * 10
