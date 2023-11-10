import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientEntityService } from '@workspace-nx/configs';

@Module({
  imports: [ClientEntityService],
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientModule {}
