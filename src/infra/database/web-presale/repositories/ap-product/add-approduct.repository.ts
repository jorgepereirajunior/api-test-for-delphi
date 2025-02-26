import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { ApProduct } from '@ApProductModule/entities'
import { CreateApProductDto } from '@ApProductModule/dto'

import { ApProductSchema } from '../../schemas'

export class AddApProductRepository {
  constructor(
    @InjectRepository(ApProductSchema, 'webConnection')
    private readonly apProductRepo: Repository<ApProduct>
  ) {}

  public async insert(apProduct: CreateApProductDto): Promise<ApProduct> {
    const product = this.apProductRepo.create(apProduct)

    await this.apProductRepo.save(product)

    return product
  }
}
