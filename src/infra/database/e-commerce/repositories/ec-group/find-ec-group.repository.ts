import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { EcGroup } from '@EcGroupModule/entities'

import { ECGrupoSchema } from '../../schemas'

export class FindEcGroupRepository {
  constructor(
    @InjectRepository(ECGrupoSchema, 'ecommerceConnection')
    private readonly ecGroupRepo: Repository<EcGroup>
  ) {}

  public async findByStoreId(storeId: number): Promise<EcGroup[]> {
    return await this.ecGroupRepo.find({
      where: {
        store_Id: storeId
      }
    })
  }
}
