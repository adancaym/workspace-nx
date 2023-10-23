import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    options: {
      host: 'cache',
      port: 6379
    }
  }
  );
  await app.listen().then(() => {
    Logger.log(
      `🚀  user is running like: microservice - redis `
    );
  });
}

bootstrap();
