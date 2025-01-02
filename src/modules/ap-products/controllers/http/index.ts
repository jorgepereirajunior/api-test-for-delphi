import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'

import { FindProductUseCase } from '../../use-cases'
import { ApProduct } from '../../entities/ap-product.entity'

@Controller()
export class ApProductController {
  constructor(private readonly findOneProductUseCase: FindProductUseCase) {}

  @Get(':id/:storeId')
  public async getByIdAndStoreId(
    @Param('id', new ParseIntPipe()) id: number,
    @Param('storeId', new ParseIntPipe()) storeId: number
  ): Promise<ApProduct> {
    return await this.findOneProductUseCase.exec(id, storeId)
  }
}
