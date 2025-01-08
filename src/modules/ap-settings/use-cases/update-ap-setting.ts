import { UpdateResult } from 'typeorm'
import { Injectable } from '@nestjs/common'

import { UpdateApSettingRepository } from '@src/infra/database/web-presale/repositories/ap-setting/update-ap-setting.repository'
import { UpdateApSettingDto } from '../dto'

@Injectable()
export class UpdateApSettingUseCase {
  constructor(private readonly apSettingRepo: UpdateApSettingRepository) {}

  public async execute(
    updateApSetting: UpdateApSettingDto
  ): Promise<UpdateResult> {
    return await this.apSettingRepo.update(updateApSetting)
  }
}
