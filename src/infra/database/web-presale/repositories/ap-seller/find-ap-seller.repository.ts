import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ApSeller } from '@src/modules/ap-seller/entities'

import { ApSellerSchema } from '../../schemas'

export class FindApSellerRepository {
  constructor(
    @InjectRepository(ApSellerSchema, 'webConnection')
    private readonly ApSellerRepo: Repository<ApSeller>
  ) {}

  public async findByIdAndStoreId(
    id: number,
    storeId: number
  ): Promise<ApSeller> {
    return this.ApSellerRepo.findOne({
      where: {
        id,
        store_id: storeId
      }
    })
  }
}
