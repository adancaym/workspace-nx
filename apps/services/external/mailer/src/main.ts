/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

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
    .then(() => Logger.log(`🚀 redis microservice mailer is running`));
}

bootstrap();
