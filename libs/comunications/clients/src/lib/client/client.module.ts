import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientEntityService } from '@workspace-nx/microservices';

@Module({
  imports: [ClientEntityService],
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientModule {}
