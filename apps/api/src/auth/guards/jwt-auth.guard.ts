import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import type { Request } from "express"
import { AuthService } from "../auth.service"
import { AUTH_COOKIE_NAME, type AuthUser, type JwtPayload } from "../auth.constants"

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly jwt: JwtService,
    private readonly authService: AuthService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request & { user?: AuthUser }>()
    const token = this.extractToken(request)

    if (!token) {
      throw new UnauthorizedException("Not authenticated")
    }

    try {
      const payload = await this.jwt.verifyAsync<JwtPayload>(token)
      const user = await this.authService.findById(payload.sub)
      if (!user) {
        throw new UnauthorizedException("Not authenticated")
      }
      request.user = user
      return true
    } catch {
      throw new UnauthorizedException("Session expired or invalid")
    }
  }

  private extractToken(request: Request): string | undefined {
    const cookieToken = request.cookies?.[AUTH_COOKIE_NAME] as string | undefined
    if (cookieToken) return cookieToken

    const [type, value] = request.headers.authorization?.split(" ") ?? []
    if (type === "Bearer" && value) return value

    return undefined
  }
}
