import { Controller, Get, Param } from "@nestjs/common"
import { PostsService } from "./posts.service"

@Controller("posts")
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  list() {
    return this.postsService.findAllPublic()
  }

  @Get(":slug")
  detail(@Param("slug") slug: string) {
    return this.postsService.findBySlugPublic(slug)
  }
}
