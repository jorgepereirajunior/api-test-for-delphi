import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'
import { FindBiProductUsecCase } from '../../use-cases/find-bi-products'
import { BiProduct } from '../../entities'

@Controller()
export class BiProductController {
  constructor(private readonly findBiProductUseCase: FindBiProductUsecCase) {}

  @Get(':storeId/:date')
  public async getByStoreIdAndDate(
    @Param('storeId', new ParseIntPipe()) storeId: number,
    @Param('date') date: string
  ): Promise<BiProduct> {
    return await this.findBiProductUseCase.listOnePassingStoreIdAndDate(
      storeId,
      date
    )
  }
}
