import { Injectable } from '@nestjs/common'

import { EcGroup } from '@EcGroupModule/entities'
import { FindEcGroupRepository } from '@Database/e-commerce/repositories/ec-group'

@Injectable()
export class FindEcGroupUseCase {
  constructor(private readonly ecGroupRepo: FindEcGroupRepository) {}

  public async listOnePassingStoreId(storeId: number): Promise<EcGroup[]> {
    const group = await this.ecGroupRepo.findByStoreId(storeId)

    return group
  }
}
