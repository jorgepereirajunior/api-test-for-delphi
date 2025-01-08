import { EntitySchema } from 'typeorm'
import { EcGroup } from '@EcGroupModule/entities'

export const ECGrupoSchema = new EntitySchema<EcGroup>({
  name: 'EcGroup',
  tableName: 'ec_group',
  target: EcGroup,
  columns: {
    id: {
      type: 'int',
      primary: true
    },
    store_Id: {
      type: 'int',
      primary: true
    },
    nmGrupo: {
      type: 'varchar',
      length: 100,
      nullable: false
    },
    ativoApp: {
      type: 'boolean',
      default: false
    },
    url_imagem: {
      type: 'varchar',
      length: 255,
      nullable: true
    }
  }
})
