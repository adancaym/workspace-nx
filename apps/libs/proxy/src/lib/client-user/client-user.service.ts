import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateClientUser, ReadClientUser } from '@workspace-nx/swagger';
import { ClientClientEntityService } from '@workspace-nx/microservices';
import { ClientUserServiceContract } from '@workspace-nx/contracts';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ClientUserService implements ClientUserServiceContract {
  constructor(
    @ClientClientEntityService
    private proxy: ClientProxy
  ) {}

  create(client: CreateClientUser): Promise<ReadClientUser> {
    return firstValueFrom(this.proxy.send('createClientUser', client))
  }
  update(id: number, client: CreateClientUser): Promise<ReadClientUser> {
    return firstValueFrom(this.proxy.send('updateClientUser', { id, ...client }))
  }
  findOne(id: number): Promise<ReadClientUser> {
    return firstValueFrom(this.proxy.send('findOneClientUser', id))
  }
  findAll(): Promise<ReadClientUser[]> {
    return firstValueFrom(this.proxy.send('findAllClientUser', {}))
  }
  remove(id: number): void {
    firstValueFrom(this.proxy.send('removeClientUser', id))
  }
}
