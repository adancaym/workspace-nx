import { Module } from '@nestjs/common';
import { UserModule } from './user';
import { CustomerClientModule } from './customer-client';
import { CustomerModule } from './customer';
import { ClientUserModule } from './client-user';
import { ClientModule } from './client';

@Module({
  imports: [
    UserModule,
    CustomerClientModule,
    CustomerModule,
    ClientUserModule,
    ClientModule,
  ],
  exports: [
    UserModule,
    CustomerClientModule,
    CustomerModule,
    ClientUserModule,
    ClientModule,
  ],
})
export class ProxyModule {}
