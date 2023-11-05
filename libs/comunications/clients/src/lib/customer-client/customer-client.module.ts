import { Module } from '@nestjs/common';
import { CustomerClientService } from './customer-client.service';
import { CustomerEntityService } from '@workspace-nx/microservices';

@Module({
  imports: [ CustomerEntityService ],
  providers: [ CustomerClientService ],
  exports: [ CustomerClientService ],
})
export class CustomerClientModule {}
