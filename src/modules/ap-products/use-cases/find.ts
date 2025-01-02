import { Injectable } from '@nestjs/common'
import { ApProductRepository } from '../../../infra/database/repositories'
import { ApProduct } from '../entities/ap-product.entity'

@Injectable()
export class FindProductUseCase {
  constructor(private readonly apProductRepository: ApProductRepository) {}

  public async exec(id: number, storeId: number): Promise<ApProduct> {
    const product = await this.apProductRepository.findByIdAndStoreId(
      id,
      storeId
    )

    return product
  }
}
