import { PartialType } from '@nestjs/mapped-types'
import { CreateApSettingDto } from './create-ap-setting.dto'

export class UpdateApSettingDto extends PartialType(CreateApSettingDto) {}
