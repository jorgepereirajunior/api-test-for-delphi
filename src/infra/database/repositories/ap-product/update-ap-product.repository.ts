import { InjectRepository } from '@nestjs/typeorm'
import { Repository, UpdateResult } from 'typeorm'

import { ApProduct } from 'src/modules/ap-products/entities/ap-product.entity'

import { ApProductScnema } from '../../schemas'
import { UpdateApProductDto } from 'src/modules/ap-products/dto/update-ap-product.dto'

export class UpdateApProductRepository {
  constructor(
    @InjectRepository(ApProductScnema)
    private readonly apProductRepo: Repository<ApProduct>
  ) {}

  public async update(apProduct: UpdateApProductDto): Promise<UpdateResult> {
    const { id, ...data } = apProduct

    return this.apProductRepo.update({ id }, data)
  }
}
