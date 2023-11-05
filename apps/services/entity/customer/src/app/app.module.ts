import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { CustomerClientModule } from './customer_client/customer_client.module';
import { Customer } from './customer/entities/customer.entity';
import { CustomerClient } from './customer_client/entities/customer_client.entity';
import { databaseCustomer } from '@workspace-nx/databases';



@Module({
  imports: [
    databaseCustomer([Customer, CustomerClient]),
    CustomerModule, 
    CustomerClientModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
