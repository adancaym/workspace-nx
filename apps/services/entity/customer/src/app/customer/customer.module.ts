import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { CustomerClient } from '../customer_client/entities/customer_client.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Customer, CustomerClient])
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
