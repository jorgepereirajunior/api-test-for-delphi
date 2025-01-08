import { UpdateResult } from 'typeorm'
import { Injectable } from '@nestjs/common'

import { UpdateApProductDto } from '@ApProductModule/dto'

import { UpdateApProductRepository } from '@src/infra/database/web-presale/repositories/ap-product/update-ap-product.repository'

@Injectable()
export class UpdateApProductUseCase {
  constructor(private readonly apProductRepo: UpdateApProductRepository) {}

  public async execute(
    updateApProduct: UpdateApProductDto
  ): Promise<UpdateResult> {
    return await this.apProductRepo.update(updateApProduct)
  }
}
