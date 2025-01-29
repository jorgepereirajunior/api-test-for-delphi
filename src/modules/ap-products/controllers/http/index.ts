import { UpdateResult } from 'typeorm'

import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put
} from '@nestjs/common'

import {
  AddNewApProductUseCase,
  FindApProductUseCase,
  UpdateApProductUseCase
} from '@ApProductModule/use-cases'

import { CreateApProductDto, UpdateApProductDto } from '@ApProductModule/dto'

import { ApProduct } from '@ApProductModule/entities/ap-product.entity'

@Controller()
export class ApProductController {
  constructor(
    private readonly findApProductUseCase: FindApProductUseCase,
    private readonly addApProductUseCase: AddNewApProductUseCase,
    private readonly updateApProductUseCase: UpdateApProductUseCase
  ) {}

  @Get(':id/:storeId')
  public async getByIdAndStoreId(
    @Param('id', new ParseIntPipe()) id: number,
    @Param('storeId', new ParseIntPipe()) storeId: number
  ): Promise<ApProduct> {
    return await this.findApProductUseCase.listOnePassingIdAndStoreId(
      id,
      storeId
    )
  }

  @Get(':storeId')
  public async getMany(
    @Param('storeId', new ParseIntPipe()) storeId: number
  ): Promise<ApProduct[]> {
    return this.findApProductUseCase.listManyPassingStoreId(storeId)
  }

  @Post('new')
  public async create(
    @Body() bodyApProduct: CreateApProductDto
  ): Promise<void> {
    return this.addApProductUseCase.execute(bodyApProduct)
  }

  @Put('update')
  public async update(
    @Body() bodyApProduct: UpdateApProductDto
  ): Promise<UpdateResult> {
    return this.updateApProductUseCase.execute(bodyApProduct)
  }
}
