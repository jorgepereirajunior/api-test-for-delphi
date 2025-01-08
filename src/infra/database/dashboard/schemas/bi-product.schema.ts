import { BiProduct } from '@src/modules/bi-products'
import { EntitySchema } from 'typeorm'

export const BiProductSchema = new EntitySchema<BiProduct>({
  name: 'BiProduct',
  target: BiProduct,
  columns: {
    id: {
      type: 'int',
      primary: true
    },
    storeId: {
      type: 'int',
      primary: true
    },
    name: {
      type: 'varchar',
      length: 100,
      nullable: false
    },
    value: {
      type: 'varchar',
      length: 20,
      nullable: false
    },
    price: {
      type: 'varchar',
      length: 20,
      nullable: false
    },
    quantity: {
      type: 'varchar',
      length: 100,
      nullable: false
    }
  }
})
