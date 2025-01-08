import { Repository, UpdateResult } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { ApProduct } from '@ApProductModule/entities'

import { UpdateApProductDto } from '@ApProductModule/dto/update-ap-product.dto'

import { ApProductSchema } from '../../schemas/pre-sale'

export class UpdateApProductRepository {
  constructor(
    @InjectRepository(ApProductSchema, 'webConnection')
    private readonly apProductRepo: Repository<ApProduct>
  ) {}

  public async update(apProduct: UpdateApProductDto): Promise<UpdateResult> {
    const { id, ...data } = apProduct

    return this.apProductRepo.update({ id }, data)
  }
}
