import { Injectable } from '@nestjs/common'
import { FindApProductRepository } from '../../../infra/database/repositories'
import { ApProduct } from '../entities/ap-product.entity'

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
