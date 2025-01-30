import { InjectRepository } from '@nestjs/typeorm'
import { Repository, UpdateResult } from 'typeorm'

import { BiStoretSchema } from '../../schemas'

import { BiStore } from '@src/modules/bi-stores/entities'

export class UpdateBiStoreRepository {
  constructor(
    @InjectRepository(BiStoretSchema, 'dashboardConnection')
    private readonly biStoreRepo: Repository<BiStore>
  ) {}

  public async update(store: BiStore): Promise<void> {
    console.log('Store to update', store)
    const { id, ...data } = store
    await this.biStoreRepo.update({ id }, data)
  }
}
