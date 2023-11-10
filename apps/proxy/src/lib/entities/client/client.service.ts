import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ClientClientEntityService } from '@workspace-nx/configs';
import {
  ClientServiceContract,
  ICreateClient,
  IReadClient,
  IUpdateClient,
} from '@workspace-nx/contracts';

import { firstValueFrom } from 'rxjs';

@Injectable()
export class ClientService implements ClientServiceContract {
  constructor(
    @ClientClientEntityService
    private proxy: ClientProxy
  ) {}

  async create(clientDto: ICreateClient): Promise<IReadClient> {
    return firstValueFrom(this.proxy.send('createClient', clientDto));
  }

  async findAll(): Promise<IReadClient[]> {
    return firstValueFrom(this.proxy.send('findAllClients', {}));
  }

  async findOne(id: number): Promise<IReadClient> {
    return firstValueFrom(this.proxy.send('findOneClient', id));
  }

  async update(id: number, clientDto: IUpdateClient): Promise<IReadClient> {
    return firstValueFrom(
      this.proxy.send('updateClient', { ...clientDto, id })
    );
  }

  async remove(id: number) {
    firstValueFrom(this.proxy.send('removeClient', id));
  }
}
