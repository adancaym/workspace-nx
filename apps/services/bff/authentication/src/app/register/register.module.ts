import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { CustomerEntityService, UserEntityService, ClientEntityService } from '@workspace-nx/microservices';
@Module({
  imports: [
    CustomerEntityService, UserEntityService, ClientEntityService 
  ],
  controllers: [RegisterController],
  providers: [RegisterService],
})
export class RegisterModule {}


