import { UpdateBiStoreRepository } from '@src/infra/database/dashboard/repositories'
import { BiStore } from '../entities'
import { Injectable } from '@nestjs/common'

@Injectable()
export class UpdateBiStoreUseCase {
  constructor(private readonly biStoreRepo: UpdateBiStoreRepository) {}

  public async updateAllInformations(store: BiStore): Promise<void> {
    console.log('Store to update', store)
    return await this.biStoreRepo.update(store)
  }
}
