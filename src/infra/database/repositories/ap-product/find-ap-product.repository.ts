import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ApProductScnema } from '../../schemas'
import { ApProduct } from 'src/modules/ap-products/entities/ap-product.entity'

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
