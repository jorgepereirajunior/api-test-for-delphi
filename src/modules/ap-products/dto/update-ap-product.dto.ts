import { PartialType } from '@nestjs/mapped-types'
import { CreateApProductDto } from './create-ap-product.dto'

export class UpdateApProductDto extends PartialType(CreateApProductDto) {}
