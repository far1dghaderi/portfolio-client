import { ArrayNotEmpty, ArrayUnique, IsArray, IsString } from "class-validator"

export class ReorderPostsDto {
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @IsString({ each: true })
  ids!: string[]
}
