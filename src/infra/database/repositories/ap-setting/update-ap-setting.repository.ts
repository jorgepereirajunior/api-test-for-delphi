import { Repository, UpdateResult } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { ApSetting } from '@ApSettingModule/entities'

import { UpdateApSettingDto } from '@ApSettingModule/dto'

import { ApSettingSchema } from '../../schemas'

export class UpdateApSettingRepository {
  constructor(
    @InjectRepository(ApSettingSchema)
    private readonly apSettingRepo: Repository<ApSetting>
  ) {}

  public async update(apSetting: UpdateApSettingDto): Promise<UpdateResult> {
    const { store_id, ...data } = apSetting

    return this.apSettingRepo.update({ store_id }, data)
  }
}
