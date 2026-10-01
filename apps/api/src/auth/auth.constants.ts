export const AUTH_COOKIE_NAME = "portfolio_token"

export interface AuthUser {
  id: string
  email: string
  name: string
}

export interface JwtPayload {
  sub: string
  email: string
  name: string
}
