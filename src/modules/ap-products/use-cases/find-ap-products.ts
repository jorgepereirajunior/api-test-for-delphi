import { Injectable } from '@nestjs/common'

import { ApProduct } from '@ApProductModule/entities'

import { FindApProductRepository } from '@src/infra/database/web-presale/repositories/ap-product'

@Injectable()
export class FindApProductUseCase {
  constructor(private readonly apProductRepo: FindApProductRepository) {}

  public async listOnePassingIdAndStoreId(
    id: number,
    storeId: number
  ): Promise<ApProduct> {
    const product = await this.apProductRepo.findByIdAndStoreId(id, storeId)

    return product
  }

  public async listAll(): Promise<ApProduct[]> {
    return await this.apProductRepo.findAll()
  }
}
