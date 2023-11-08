import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ClientClientEntityService } from '@workspace-nx/microservices';
import {
  ClientServiceContract,
  ICreateClient,
  IReadClient,
  IUpdateClient,
} from '@workspace-nx/contracts';

import {  Observable, firstValueFrom } from 'rxjs';

@Injectable()
export class ClientService implements ClientServiceContract {
  constructor(
    @ClientClientEntityService
    private proxy: ClientProxy
  ) {}

  async create(clientDto: ICreateClient): Promise<IReadClient> {
    const client: Observable<IReadClient> = this
    .proxy.send('createClient', clientDto)

    return firstValueFrom(client);
  }

  async findAll(): Promise<IReadClient[]> {
    const clients: Observable<IReadClient[]> = this
    .proxy.send('findAllClients', {})

    return firstValueFrom(clients);
  }

  async findOne(id: number): Promise<IReadClient> {
    const client: Observable<IReadClient> = this
    .proxy.send('findOneClient', id)

    return firstValueFrom(client);
  }

  async update(id: number, clientDto: IUpdateClient): Promise<IReadClient> {
    const client: Observable<IReadClient> = this
    .proxy.send('updateClient', { ...clientDto, id })

    return firstValueFrom(client);
  }

  async remove(id: number) {
    this.proxy.send('removeClient', id);
  }
}
