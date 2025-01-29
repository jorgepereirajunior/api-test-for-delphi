import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'

import { FindApSellerUseCase } from '../../use-cases'

import { ApSeller } from '../../entities'

@Controller()
export class ApSellerController {
  constructor(private readonly findApSellerUseCase: FindApSellerUseCase) {}

  @Get(':id/:storeId')
  public async getByStoreId(
    @Param('id', new ParseIntPipe()) id: number,
    @Param('storeId', new ParseIntPipe()) storeId: number
  ): Promise<ApSeller> {
    return await this.findApSellerUseCase.listOnePassingStoreId(id, storeId)
  }
}
