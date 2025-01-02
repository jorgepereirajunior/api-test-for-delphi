import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ApProductScnema } from '../schemas'
import { ApProduct } from 'src/modules/ap-products/entities/ap-product.entity'

export class ApProductRepository {
  constructor(
    @InjectRepository(ApProductScnema)
    private readonly apProduct: Repository<ApProduct>
  ) {}

  public findAll(): Promise<ApProduct[]> {
    return this.apProduct.find()
  }
}
