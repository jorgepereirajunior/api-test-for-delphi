import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'

import { ApProductsService } from './ap-products.service'
import { CreateApProductDto } from './dto/create-ap-product.dto'
import { UpdateApProductDto } from './dto/update-ap-product.dto'

import { ApProduct } from './entities/ap-product.entity'

@Controller()
export class ApProductsController {
  constructor(private readonly apProductsService: ApProductsService) {}

  @Post()
  create(@Body() createApProductDto: CreateApProductDto) {
    return this.apProductsService.create(createApProductDto)
  }

  @Get()
  findAll() {
    return this.apProductsService.findAll()
  }

  @Get(':id/:storeId')
  findOne(
    @Param('id') id: string,
    @Param('storeId') storeId: string
  ): ApProduct {
    const apProduct = this.apProductsService.findOne(+id, +storeId)

    return apProduct
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateApProductDto: UpdateApProductDto
  ) {
    return this.apProductsService.update(+id, updateApProductDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apProductsService.remove(+id)
  }
}
