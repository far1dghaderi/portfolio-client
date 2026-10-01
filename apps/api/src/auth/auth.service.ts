import { Injectable, UnauthorizedException } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"
import * as bcrypt from "bcryptjs"
import { PrismaService } from "../prisma/prisma.service"
import type { AuthUser, JwtPayload } from "./auth.constants"

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<AuthUser> {
    const user = await this.prisma.adminUser.findUnique({
      where: { email: email.toLowerCase() },
    })

    if (!user) {
      throw new UnauthorizedException("Invalid email or password")
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new UnauthorizedException("Invalid email or password")
    }

    return { id: user.id, email: user.email, name: user.name }
  }

  async login(email: string, password: string): Promise<{ token: string; user: AuthUser }> {
    const user = await this.validateUser(email, password)
    const payload: JwtPayload = { sub: user.id, email: user.email, name: user.name }
    const token = await this.jwt.signAsync(payload)
    return { token, user }
  }

  async findById(id: string): Promise<AuthUser | null> {
    const user = await this.prisma.adminUser.findUnique({ where: { id } })
    if (!user) return null
    return { id: user.id, email: user.email, name: user.name }
  }
}
