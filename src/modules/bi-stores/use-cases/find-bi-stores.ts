import { Injectable } from '@nestjs/common'

import { FindBiStoreRepository } from '@Database/dashboard/repositories'

import { BiStore } from '../entities'

@Injectable()
export class FindBiStoreUseCase {
  constructor(private readonly biStoreRepo: FindBiStoreRepository) {}

  public async listOnePassingCnpj(cnpj: string): Promise<BiStore> {
    console.log('CNPJ requisitado: ', cnpj)
    const store = await this.biStoreRepo.findByCnpj(cnpj)

    return store
  }
}
