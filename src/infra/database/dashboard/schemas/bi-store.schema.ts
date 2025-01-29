import { EntitySchema } from 'typeorm'

import { BiStore } from '@src/modules/bi-stores/entities'

export const BiStoretSchema = new EntitySchema<BiStore>({
  name: 'BiStore',
  tableName: 'stores',
  schema: 'dbo',
  target: BiStore,
  columns: {
    id: {
      type: 'int',
      primary: true
    },
    store_group_id: {
      type: 'int',
      primary: true
    },
    name: {
      type: 'varchar',
      length: 100,
      nullable: false
    },
    cnpj: {
      type: 'varchar',
      length: 200,
      nullable: false
    },
    pcId: {
      type: 'varchar',
      length: 20,
      nullable: true
    },
    active: {
      type: 'bit',
      nullable: false
    },
    folderFtp_id: {
      type: 'int',
      nullable: true
    },
    scriptVersion: {
      type: 'int',
      nullable: false
    },
    cdPessoa: {
      type: 'int',
      nullable: true
    }
  }
})
