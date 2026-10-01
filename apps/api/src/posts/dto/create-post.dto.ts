import {
  ArrayUnique,
  IsArray,
  IsBoolean,
  IsIn,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from "class-validator"

export const POST_TONES = ["primary", "secondary", "tertiary", "outline"] as const
export const POST_VISUALS = ["code", "metrics", "callout"] as const

export class CreatePostDto {
  @IsString()
  @MinLength(3)
  @MaxLength(200)
  title!: string

  @IsOptional()
  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: "slug must be lowercase alphanumeric words separated by hyphens",
  })
  slug?: string

  @IsString()
  @MinLength(1)
  @MaxLength(600)
  description!: string

  @IsString()
  @MinLength(1)
  content!: string

  @IsString()
  @MinLength(1)
  @MaxLength(80)
  category!: string

  @IsOptional()
  @IsIn(POST_TONES)
  tone?: (typeof POST_TONES)[number]

  @IsOptional()
  @IsArray()
  @ArrayUnique()
  @IsString({ each: true })
  tags?: string[]

  @IsOptional()
  @IsBoolean()
  featured?: boolean

  @IsOptional()
  @IsBoolean()
  published?: boolean

  @IsOptional()
  @IsIn(POST_VISUALS)
  visual?: (typeof POST_VISUALS)[number]

  @IsOptional()
  @IsString()
  @MaxLength(2048)
  imageUrl?: string | null

  @IsOptional()
  @IsString()
  @MaxLength(60)
  readTime?: string

  @IsOptional()
  @IsString()
  @MaxLength(60)
  ref?: string
}
