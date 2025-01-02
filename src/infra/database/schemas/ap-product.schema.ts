import { EntitySchema } from 'typeorm'
import { ApProduct } from '../../../modules/ap-products/entities/ap-product.entity'

export const ApProductScnema = new EntitySchema<ApProduct>({
  name: 'ApProduct',
  tableName: 'ap_products',
  target: ApProduct,
  columns: {
    id: {
      type: 'int',
      primary: true
    },
    store_id: {
      type: 'int',
      primary: true
    },
    nmProduto: {
      type: 'varchar',
      length: 255
    },
    vlVarejo: {
      type: 'decimal',
      precision: 10,
      scale: 2
    },
    vlAtacado: {
      type: 'decimal',
      precision: 10,
      scale: 2
    },
    nmGrupo: {
      type: 'varchar',
      length: 255
    },
    nmSubGrupo: {
      type: 'varchar',
      length: 255
    },
    cdBarras: {
      type: 'varchar',
      length: 255
    },
    url_imagem: {
      type: 'varchar',
      length: 500
    },
    url_default: {
      type: 'varchar',
      length: 500
    },
    qtdEstoque: {
      type: 'int'
    },
    vlVarejoPromocao: {
      type: 'decimal',
      precision: 10,
      scale: 2,
      nullable: true
    },
    vlAtacadoPromocao: {
      type: 'decimal',
      precision: 10,
      scale: 2,
      nullable: true
    },
    dsObservacao: {
      type: 'text',
      nullable: true
    },
    nmFabricante: {
      type: 'varchar',
      length: 255
    },
    nmFornecedor: {
      type: 'varchar',
      length: 255
    },
    ativo: {
      type: 'boolean',
      default: true
    },
    dsPrateleira: {
      type: 'varchar',
      length: 255
    },
    dsReferenciaInterna: {
      type: 'varchar',
      length: 255
    },
    dsReferenciaFabrica: {
      type: 'varchar',
      length: 255
    },
    vlVarejoMinimo: {
      type: 'decimal',
      precision: 10,
      scale: 2
    },
    vlVarejoMaximo: {
      type: 'decimal',
      precision: 10,
      scale: 2
    },
    vlAtacadoMinimo: {
      type: 'decimal',
      precision: 10,
      scale: 2
    },
    vlAtacadoMaximo: {
      type: 'decimal',
      precision: 10,
      scale: 2
    }
  }
})
