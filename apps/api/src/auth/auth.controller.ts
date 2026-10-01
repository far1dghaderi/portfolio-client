import { Body, Controller, Get, Post, Res, UseGuards } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import type { Response } from "express"
import { AUTH_COOKIE_NAME, type AuthUser } from "./auth.constants"
import { AuthService } from "./auth.service"
import { CurrentUser } from "./decorators/current-user.decorator"
import { LoginDto } from "./dto/login.dto"
import { JwtAuthGuard } from "./guards/jwt-auth.guard"

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly config: ConfigService
  ) {}

  private cookieOptions() {
    const secure = this.config.get<string>("COOKIE_SECURE") === "true"
    return {
      httpOnly: true,
      secure,
      sameSite: "lax" as const,
      path: "/",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    }
  }

  @Post("login")
  async login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
    const { token, user } = await this.authService.login(dto.email, dto.password)
    res.cookie(AUTH_COOKIE_NAME, token, this.cookieOptions())
    return { user }
  }

  @Post("logout")
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie(AUTH_COOKIE_NAME, { path: "/" })
    return { success: true }
  }

  @UseGuards(JwtAuthGuard)
  @Get("me")
  me(@CurrentUser() user: AuthUser) {
    return { user }
  }
}
