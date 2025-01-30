import { EntitySchema } from 'typeorm'

import { ApProduct } from '@ApProductModule/entities'

export const ApProductSchema = new EntitySchema<ApProduct>({
  name: 'ApProduct',
  tableName: 'Produto',
  schema: 'dbo',
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
      type: 'money'
    },
    vlAtacado: {
      type: 'money'
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
      type: 'float'
    },
    vlVarejoPromocao: {
      type: 'money',
      nullable: true
    },
    vlAtacadoPromocao: {
      type: 'money',
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
      type: 'bit',
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
      type: 'money'
    },
    vlVarejoMaximo: {
      type: 'money'
    },
    vlAtacadoMinimo: {
      type: 'money'
    },
    vlAtacadoMaximo: {
      type: 'money'
    }
  }
})
