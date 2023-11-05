import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerEntityService } from '@workspace-nx/microservices';

@Module({
  imports: [CustomerEntityService],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
