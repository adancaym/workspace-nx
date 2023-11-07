import { Module } from '@nestjs/common';
import { ClientUserService } from './client_user.service';
import { ClientUserController } from './client_user.controller';
import { ClientUser } from './entities/client_user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ClientUser])],
  controllers: [ClientUserController],
  providers: [ClientUserService],
})
export class ClientUserModule {}
