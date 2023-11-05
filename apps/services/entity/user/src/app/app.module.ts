import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { databaseUser } from '@workspace-nx/databases';
import { User } from './user/entities/user.entity';


@Module({
  imports: [databaseUser(
    [User]
  ),UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
