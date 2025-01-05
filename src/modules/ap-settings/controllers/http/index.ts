import { UpdateResult } from 'typeorm'

import { Body, Controller, Get, Param, ParseIntPipe, Put } from '@nestjs/common'

import { UpdateApSettingUseCase } from '@ApSettingModule/use-cases'

import { UpdateApSettingDto } from '../../dto'
import { ApSetting } from '../../entities'
import { FindApSettingUseCase } from '../../use-cases/find-ap-setting'

@Controller()
export class ApSettingController {
  constructor(
    private readonly findApSettingUseCase: FindApSettingUseCase,
    private readonly updateApSettingUseCase: UpdateApSettingUseCase
  ) {}

  @Get(':storeId')
  public async getByStoreId(
    @Param('storeId', new ParseIntPipe()) storeId: number
  ): Promise<ApSetting> {
    return await this.findApSettingUseCase.listOnePassingStoreId(storeId)
  }

  @Put('update')
  public async update(
    @Body() bodyApSetting: UpdateApSettingDto
  ): Promise<UpdateResult> {
    return this.updateApSettingUseCase.execute(bodyApSetting)
  }
}
