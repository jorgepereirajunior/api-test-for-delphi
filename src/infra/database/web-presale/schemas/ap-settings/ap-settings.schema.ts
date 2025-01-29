import { EntitySchema } from 'typeorm'

import { ApSetting } from '@src/modules/ap-settings/entities'

export const ApSettingSchema = new EntitySchema<ApSetting>({
  name: 'ApSetting',
  tableName: 'Configuracao',
  schema: 'dbo',
  target: ApSetting,
  columns: {
    store_id: {
      type: 'int',
      primary: true
    },
    venderEstoqueNegativo: {
      type: 'bit',
      default: false
    },
    limiteMaxDesconto: {
      type: 'float',
      default: 0
    },
    url_logo: {
      type: 'varchar',
      length: 255,
      nullable: true
    },
    nmEmpresa: {
      type: 'varchar',
      length: 255
    },
    cnpj: {
      type: 'varchar',
      length: 14,
      unique: true
    },
    dsTelefone: {
      type: 'varchar',
      length: 20,
      nullable: true
    },
    dsEndereco: {
      type: 'varchar',
      length: 255,
      nullable: true
    },
    dsEmail: {
      type: 'varchar',
      length: 255,
      nullable: true
    },
    usaCarteiraVendedor: {
      type: 'bit',
      default: false
    },
    bloquearFormaPagamento: {
      type: 'bit',
      default: false
    },
    lojaAtiva: {
      type: 'bit',
      default: true
    }
  }
})
