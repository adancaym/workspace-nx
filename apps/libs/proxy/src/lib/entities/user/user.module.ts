import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntityService } from '@workspace-nx/microservices';

@Module({
  imports: [UserEntityService],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
