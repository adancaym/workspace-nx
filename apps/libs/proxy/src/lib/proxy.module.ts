import { Module } from '@nestjs/common';
import { UserModule } from './entities/user';
import { CustomerClientModule } from './entities/customer-client';
import { CustomerModule } from './entities/customer';
import { ClientUserModule } from './entities/client-user';
import { ClientModule } from './entities/client';

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
