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
    console.log('ApProduto requisitado')

    const product = await this.apProductRepo.findByIdAndStoreId(id, storeId)
    console.log('-----------------------------')
    console.log('ApProduto retornado: ', product)
    return product
  }

  public async listManyPassingStoreId(storeId: number): Promise<ApProduct[]> {
    return await this.apProductRepo.findManyByStoreId(storeId)
  }
}
