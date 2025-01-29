import { Injectable } from '@nestjs/common'

import { FindApSellerRepository } from '@Database/web-presale/repositories'

import { ApSeller } from '../entities'

@Injectable()
export class FindApSellerUseCase {
  constructor(private readonly ApSellerRepo: FindApSellerRepository) {}

  public async listOnePassingStoreId(
    id: number,
    storeId: number
  ): Promise<ApSeller> {
    console.log('VendedorId: ', id, 'VendedorStoreId: ', storeId)

    const seller = await this.ApSellerRepo.findByStoreId(id, storeId)
    console.log('-----------------------------')
    console.log('Vendedor retornad: ', seller)

    return seller
  }
}
