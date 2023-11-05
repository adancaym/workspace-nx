import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ClientClientEntityService } from '@workspace-nx/microservices';
import {
  ClientServiceContract,
  IClient,
  ICreateClient,
} from '@workspace-nx/models';

@Injectable()
export class ClientService implements ClientServiceContract {
  constructor(
    @ClientClientEntityService
    private proxy: ClientProxy
  ) {}

  async create(clientDto: ICreateClient): Promise<IClient> {
    const client = await this.proxy.send('createClient', clientDto).toPromise();
    return client;
  }

  async findAll(): Promise<IClient[]> {
    const clients = await this.proxy.send('findAllClients', {}).toPromise();
    return clients;
  }

  async findOne(id: number): Promise<IClient> {
    const client = await this.proxy.send('findOneClient', id).toPromise();
    return client;
  }

  async update(id: number, clientDto: ICreateClient): Promise<IClient> {
    const client = await this.proxy
      .send('updateClient', { id, ...clientDto })
      .toPromise();
    return client;
  }

  async remove(id: number) {
    await this.proxy.send('removeClient', id).toPromise();
  }
}
