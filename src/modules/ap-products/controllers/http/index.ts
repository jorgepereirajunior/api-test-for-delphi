import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put
} from '@nestjs/common'

import { AddNewApProductUseCase, FindApProductUseCase } from '../../use-cases'

import { ApProduct } from '../../entities/ap-product.entity'
import { CreateApProductDto } from '../../dto/create-ap-product.dto'
import { UpdateApProductUseCase } from '../../use-cases/update-ap-product'
import { UpdateResult } from 'typeorm'
import { UpdateApProductDto } from '../../dto/update-ap-product.dto'

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

  @Get('all')
  public async getAll(): Promise<ApProduct[]> {
    return this.findApProductUseCase.listAll()
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
