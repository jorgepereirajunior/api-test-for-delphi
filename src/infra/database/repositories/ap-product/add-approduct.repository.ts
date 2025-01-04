import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ApProduct } from 'src/modules/ap-products/entities/ap-product.entity'
import { CreateApProductDto } from 'src/modules/ap-products/dto/create-ap-product.dto'

import { ApProductScnema } from '../../schemas'

export class AddApProductRepository {
  constructor(
    @InjectRepository(ApProductScnema)
    private readonly apProductRepo: Repository<ApProduct>
  ) {}

  public async insert(apProduct: CreateApProductDto): Promise<ApProduct> {
    const product = this.apProductRepo.create(apProduct)

    await this.apProductRepo.save(product)

    return product
  }
}
