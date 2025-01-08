import { Injectable } from '@nestjs/common'

import { CreateApProductDto } from '@ApProductModule/dto'

import { AddApProductRepository } from '@src/infra/database/web-presale/repositories/ap-product'

@Injectable()
export class AddNewApProductUseCase {
  constructor(private readonly apProductRepo: AddApProductRepository) {}

  public async execute(createApProduct: CreateApProductDto) {
    await this.apProductRepo.insert(createApProduct)
  }
}
