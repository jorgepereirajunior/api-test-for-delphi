import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { BiStore } from '@src/modules/bi-stores/entities'

import { BiStoretSchema } from '../../schemas'

export class FindBiStoreRepository {
  constructor(
    @InjectRepository(BiStoretSchema, 'dashboardConnection')
    private readonly biStoreRepo: Repository<BiStore>
  ) {}

  public async findByCnpj(cnpj: string): Promise<BiStore> {
    return this.biStoreRepo.findOneOrFail({
      where: {
        cnpj
      }
    })
  }
}
