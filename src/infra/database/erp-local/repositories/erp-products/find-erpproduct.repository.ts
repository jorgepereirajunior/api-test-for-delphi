import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { ErpProduct } from '@src/modules/erp-products/entities'

import { ErpProductSchema } from '../../schemas'

export class FindErpProductRepository {
  constructor(
    @InjectRepository(ErpProductSchema, 'erpLocalConnection')
    private readonly erpProductRepo: Repository<ErpProduct>
  ) {}

  public async findAll(): Promise<ErpProduct[]> {
    return await this.erpProductRepo.find()
  }
}
