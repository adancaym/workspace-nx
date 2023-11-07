import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { ProxyModule } from '@workspace-nx/proxy';
@Module({
  imports: [ProxyModule],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}


