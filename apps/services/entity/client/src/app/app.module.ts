import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { ClientUserModule } from './client_user/client_user.module';
import { Client } from './client/entities/client.entity';
import { ClientUser } from './client_user/entities/client_user.entity';
import { databaseClient } from '@workspace-nx/databases';


@Module({
  imports: [
    databaseClient([Client, ClientUser]),
    ClientModule, ClientUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
