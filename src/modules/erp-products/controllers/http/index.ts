import { Controller, Get } from '@nestjs/common'

import { FindErpProductUseCase } from '../../use-cases'

import { ErpProduct } from '../../entities'

@Controller()
export class ErpProductController {
  constructor(private readonly findErpProductUseCase: FindErpProductUseCase) {}

  @Get('all')
  public async getAll(): Promise<ErpProduct[]> {
    return this.findErpProductUseCase.listAll()
  }
}
