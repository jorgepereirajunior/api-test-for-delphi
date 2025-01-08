import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { ApSetting } from '@src/modules/ap-settings/entities'

import { ApSettingSchema } from '../../schemas/pre-sale'

export class FindApSettingRepository {
  constructor(
    @InjectRepository(ApSettingSchema, 'webConnection')
    private readonly apSetting: Repository<ApSetting>
  ) {}

  public async findByStoreId(storeId: number): Promise<ApSetting> {
    return await this.apSetting.findOneOrFail({
      where: { store_id: storeId }
    })
  }
}
