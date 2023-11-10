import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

import { startUpMicroservice } from '@workspace-nx/configs';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<AppModule>(
    AppModule,
    startUpMicroservice()
  );
  return app
    .listen()
    .then(() => Logger.log(`🚀 redis microservice user is running`));
}

bootstrap();
