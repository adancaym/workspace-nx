/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { documentation } from '@workspace-nx/documentation';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;

  documentation({
    app,
    title: 'Authentication',
    description: 'Authentication API',
    version: '1.0',
  });
  
  await app.listen(port);
  Logger.log(
    `🚀 Authentication is running on: http://localhost:${port}/`
  );
}

bootstrap();
