import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common'

import { FindEcGroupUseCase } from '../../use-cases/find-ec-groups'

import { EcGroup } from '@EcGroupModule/entities'

@Controller()
export class EcGroupController {
  constructor(private readonly findEcGroupUseCase: FindEcGroupUseCase) {}

  @Get(':storeId')
  public async getByStoreId(
    @Param('storeId', new ParseIntPipe()) storeId: number
  ): Promise<EcGroup[]> {
    return await this.findEcGroupUseCase.listManyPassingStoreId(storeId)
  }
}
