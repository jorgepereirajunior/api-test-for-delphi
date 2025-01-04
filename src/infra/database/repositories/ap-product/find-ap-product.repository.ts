import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { ApProduct } from '@ApProductModule/entities'

import { ApProductScnema } from '../../schemas'

export class FindApProductRepository {
  constructor(
    @InjectRepository(ApProductScnema)
    private readonly apProduct: Repository<ApProduct>
  ) {}

  public async findByIdAndStoreId(
    id: number,
    storeId: number
  ): Promise<ApProduct> {
    return await this.apProduct.findOneOrFail({
      where: {
        id,
        store_id: storeId
      }
    })
  }

  public async findAll(): Promise<ApProduct[]> {
    return await this.apProduct.find()
  }
}
