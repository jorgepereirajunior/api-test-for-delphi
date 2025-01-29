import { Controller, Get, Query } from '@nestjs/common'

import { FindBiStoreUseCase } from '../../use-cases/find-bi-stores'

import { BiStore } from '../../entities'

@Controller()
export class BiStoreController {
  constructor(private readonly findBiStoreUseCase: FindBiStoreUseCase) {}

  @Get('')
  public async getByCnpj(
    @Query('document') document: string
  ): Promise<BiStore> {
    return await this.findBiStoreUseCase.listOnePassingCnpj(document)
  }
}
