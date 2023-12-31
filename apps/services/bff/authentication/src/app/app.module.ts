import { Module } from '@nestjs/common';
import { RegisterModule } from './register/register.module';
import { CustomerModule } from '@workspace-nx/proxy';

@Module({
  imports: [RegisterModule, CustomerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
