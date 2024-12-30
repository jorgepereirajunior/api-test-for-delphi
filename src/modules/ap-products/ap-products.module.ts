import { Module } from '@nestjs/common';
import { ApProductsService } from './ap-products.service';
import { ApProductsController } from './ap-products.controller';

@Module({
  controllers: [ApProductsController],
  providers: [ApProductsService],
})
export class ApProductsModule {}
