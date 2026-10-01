import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common"
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard"
import { CreatePostDto } from "./dto/create-post.dto"
import { ReorderPostsDto } from "./dto/reorder-posts.dto"
import { UpdatePostDto } from "./dto/update-post.dto"
import { PostsService } from "./posts.service"

@UseGuards(JwtAuthGuard)
@Controller("admin/posts")
export class AdminPostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  list() {
    return this.postsService.findAllAdmin()
  }

  @Post()
  create(@Body() dto: CreatePostDto) {
    return this.postsService.create(dto)
  }

  @Patch("reorder")
  reorder(@Body() dto: ReorderPostsDto) {
    return this.postsService.reorder(dto.ids)
  }

  @Get("categories")
  categories() {
    return this.postsService.findCategories()
  }

  @Get(":id")
  detail(@Param("id") id: string) {
    return this.postsService.findByIdAdmin(id)
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() dto: UpdatePostDto) {
    return this.postsService.update(id, dto)
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.postsService.remove(id)
  }
}
