import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { BiProduct } from '@src/modules/bi-products/entities'

import { BiProductSchema } from '../schemas/bi-product.schema'

export class FindBiProductRepository {
  constructor(
    @InjectRepository(BiProductSchema, 'dashboardConnection')
    private readonly biProductRepo: Repository<BiProduct>
  ) {}

  public async findByStoreIdAndDate(
    storeId: number,
    date: string
  ): Promise<BiProduct> {
    return this.biProductRepo.findOneOrFail({
      where: {
        storeId,
        date
      }
    })
  }
}
