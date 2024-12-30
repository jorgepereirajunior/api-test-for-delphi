import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ApProductsModule } from './modules/ap-products/ap-products.module'

@Module({
  imports: [ApProductsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
