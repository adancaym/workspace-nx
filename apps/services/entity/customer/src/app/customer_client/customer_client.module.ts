import { Module } from '@nestjs/common';
import { CustomerClientService } from './customer_client.service';
import { CustomerClientController } from './customer_client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from '../customer/entities/customer.entity';
import { CustomerClient } from './entities/customer_client.entity';

@Module({
  imports: [  
    TypeOrmModule.forFeature([Customer, CustomerClient]),
  ],
  controllers: [CustomerClientController],
  providers: [CustomerClientService],
})
export class CustomerClientModule {}
