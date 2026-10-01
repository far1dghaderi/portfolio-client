import { ValidationPipe } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { NestFactory } from "@nestjs/core"
import cookieParser from "cookie-parser"
import { AppModule } from "./app.module"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const config = app.get(ConfigService)

  app.setGlobalPrefix("api")
  app.use(cookieParser())

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: { enableImplicitConversion: true },
    })
  )

  const origins = (config.get<string>("CORS_ORIGIN") ?? "http://localhost:5173")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean)

  app.enableCors({
    origin: origins,
    credentials: true,
  })

  const port = config.get<number>("PORT") ?? 3002
  await app.listen(port)
  console.log(`API listening on http://localhost:${port}/api`)
}

void bootstrap()
