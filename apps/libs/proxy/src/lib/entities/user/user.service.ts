import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUser, ReadUser, UpdateUser } from '@workspace-nx/swagger';
import { UserClientEntityService } from '@workspace-nx/microservices';
import { UserServiceContract } from '@workspace-nx/contracts';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UserService implements UserServiceContract {
  constructor(
    @UserClientEntityService
    private proxy: ClientProxy
  ) {}

  create(user: CreateUser): Promise<ReadUser> {
    return firstValueFrom(this.proxy.send('createUser', user))
  }
  update(id: number, client: UpdateUser): Promise<ReadUser> {
    return firstValueFrom(this.proxy.send('updateUser', { ...client, id }))
  }
  findOne(id: number): Promise<ReadUser> {
    return firstValueFrom( this.proxy.send('findOneUser', id))
  }
  findAll(): Promise<ReadUser[]> {
    return firstValueFrom(this.proxy.send('findAllUser', {}));
  }
  remove(id: number): void {
    firstValueFrom(this.proxy.send('removeUser', id));
  }
}
