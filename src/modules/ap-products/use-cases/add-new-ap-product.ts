import { Injectable } from '@nestjs/common'

import { CreateApProductDto } from '../dto/create-ap-product.dto'

import { AddApProductRepository } from 'src/infra/database/repositories/ap-product/add-approduct.repository'

@Injectable()
export class AddNewApProductUseCase {
  constructor(private readonly apProductRepo: AddApProductRepository) {}

  public async execute(createApProduct: CreateApProductDto) {
    await this.apProductRepo.insert(createApProduct)
  }
}
