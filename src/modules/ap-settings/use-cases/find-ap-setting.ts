import { Injectable } from '@nestjs/common'
import { FindApSettingRepository } from '@src/infra/database/web-presale/repositories'
import { ApSetting } from '../entities'

@Injectable()
export class FindApSettingUseCase {
  constructor(private readonly apSettingRepo: FindApSettingRepository) {}

  public async listOnePassingStoreId(storeId: number): Promise<ApSetting> {
    const setting = await this.apSettingRepo.findByStoreId(storeId)

    return setting
  }
}
