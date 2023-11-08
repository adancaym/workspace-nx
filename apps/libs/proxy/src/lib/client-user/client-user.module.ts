import { Module } from '@nestjs/common';
import { ClientUserService } from './client-user.service';
import { ClientEntityService } from '@workspace-nx/microservices';

@Module({
  imports: [ClientEntityService],
  providers: [ClientUserService],
  exports: [ClientUserService],
})
export class ClientUserModule {}
