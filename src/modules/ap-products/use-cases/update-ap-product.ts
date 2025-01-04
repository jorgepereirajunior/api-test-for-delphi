import { Injectable } from '@nestjs/common'
import { UpdateApProductRepository } from 'src/infra/database/repositories/ap-product/update-ap-product.repository'
import { UpdateApProductDto } from '../dto/update-ap-product.dto'
import { UpdateResult } from 'typeorm'

@Injectable()
export class UpdateApProductUseCase {
  constructor(private apProductRepo: UpdateApProductRepository) {}

  public async execute(
    updateApProduct: UpdateApProductDto
  ): Promise<UpdateResult> {
    return await this.apProductRepo.update(updateApProduct)
  }
}
