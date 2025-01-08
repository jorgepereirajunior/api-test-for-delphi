import { Injectable } from '@nestjs/common'

import { FindBiProductRepository } from '@Database/dashboard/repositories'

import { BiProduct } from '../entities'

@Injectable()
export class FindBiProductUsecCase {
  constructor(private readonly biProductRepo: FindBiProductRepository) {}

  public async listOnePassingStoreIdAndDate(
    storeId: number,
    date: string
  ): Promise<BiProduct> {
    const product = await this.biProductRepo.findByStoreIdAndDate(storeId, date)

    return product
  }
}
