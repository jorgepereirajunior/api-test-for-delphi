import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Query
} from '@nestjs/common'

import { FindBiStoreUseCase } from '../../use-cases/find-bi-stores'

import { BiStore } from '../../entities'
import { UpdateBiStoreUseCase } from '../../use-cases'

@Controller()
export class BiStoreController {
  constructor(
    private readonly findBiStoreUseCase: FindBiStoreUseCase,
    private readonly updateBiStoreUseCase: UpdateBiStoreUseCase
  ) {}

  @Get('')
  public async getByCnpj(
    @Query('document') document: string
  ): Promise<BiStore> {
    return await this.findBiStoreUseCase.listOnePassingCnpj(document)
  }

  @Put(':id')
  public async update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() body: BiStore
  ): Promise<void> {
    const store = { ...body, id }

    return await this.updateBiStoreUseCase.updateAllInformations(store)
  }
}
