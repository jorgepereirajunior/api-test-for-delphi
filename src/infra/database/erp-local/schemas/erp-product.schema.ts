import { EntitySchema } from 'typeorm'

import { ErpProduct } from '@ErpProductModule/entities'

export const ErpProductSchema = new EntitySchema<ErpProduct>({
  name: 'ErpProduct',
  tableName: 'Produto',
  schema: 'dbo',
  target: ErpProduct,
  columns: {
    cdProduto: {
      type: 'int',
      primary: true
    },
    nmproduto: {
      type: 'varchar',
      length: 60
    },
    dsUnidade: {
      type: 'varchar',
      length: 10
    },
    vlPreco: {
      type: 'decimal',
      precision: 10,
      scale: 2
    },
    vlAtacado: {
      type: 'decimal',
      precision: 10,
      scale: 2
    },
    cdFabricante: {
      type: 'varchar',
      length: 25
    },
    cdCodigoDIC: {
      type: 'varchar',
      length: 25
    },
    dsReferencia: {
      type: 'varchar',
      length: 25
    }
  }
})
