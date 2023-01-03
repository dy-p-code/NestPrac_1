import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // validation pipe : 유효성 검사
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // decorator 없는 property의 object는 거름
      forbidNonWhitelisted: true, // 요소를 거름
      transform: true, // 유저가 보낸 데이터를 실제 원하는 타입으로 변환
    }),
  );
  await app.listen(3000);
}
bootstrap();
