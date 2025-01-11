import { Injectable } from '@nestjs/common'

import { FindErpProductRepository } from '@src/infra/database/erp-local/repositories'

import { ErpProduct } from '../entities'

@Injectable()
export class FindErpProductUseCase {
  constructor(private readonly erpProductRepo: FindErpProductRepository) {}

  public async listAll(): Promise<ErpProduct[]> {
    return await this.erpProductRepo.findAll()
  }
}
