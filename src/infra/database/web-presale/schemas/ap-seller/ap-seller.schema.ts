import { EntitySchema } from 'typeorm'

import { ApSeller } from '@src/modules/ap-seller/entities'

export const ApSellerSchema = new EntitySchema<ApSeller>({
  name: 'ApSeller',
  tableName: 'Vendedor',
  schema: 'dbo',
  target: ApSeller,
  columns: {
    id: {
      type: 'int',
      primary: true
    },
    store_id: {
      type: 'int',
      primary: true
    },
    nmVendedor: {
      type: 'varchar',
      length: 100,
      nullable: true
    },
    nrTelefone: {
      type: 'varchar',
      length: 20,
      nullable: false
    },
    dsEmail: {
      type: 'varchar',
      length: 250,
      nullable: false
    },
    dsSenha: {
      type: 'varchar',
      length: 100,
      nullable: true
    },
    alteraPreco: {
      type: 'bit',
      nullable: false
    },
    administrador: {
      type: 'bit',
      nullable: false
    },
    usaCarteira: {
      type: 'bit',
      nullable: false
    },
    ativo: {
      type: 'bit',
      nullable: false
    },
    baixar_carteira: {
      type: 'bit',
      nullable: false
    }
  }
})
