import { Module } from '@nestjs/common';
import {
  UserModule,
  CustomerClientModule,
  CustomerModule,
  ClientUserModule,
  ClientModule,
} from './entities';
import { MailerModule } from './external';

@Module({
  imports: [
    UserModule,
    CustomerClientModule,
    CustomerModule,
    ClientUserModule,
    ClientModule,
    MailerModule,
  ],
  exports: [
    UserModule,
    CustomerClientModule,
    CustomerModule,
    ClientUserModule,
    ClientModule,
    MailerModule,
  ],
})
export class ProxyModule {}
