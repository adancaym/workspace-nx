import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ClientClientEntityService } from '@workspace-nx/microservices';
import {
  ClientServiceContract,
  ICreateClient,
  IReadClient,
  IUpdateClient,
} from '@workspace-nx/contracts';

@Injectable()
export class ClientService implements ClientServiceContract {
  constructor(
    @ClientClientEntityService
    private proxy: ClientProxy
  ) {}

  async create(clientDto: ICreateClient): Promise<IReadClient> {
    const client = await this.proxy.send('createClient', clientDto).toPromise();
    return client;
  }

  async findAll(): Promise<IReadClient[]> {
    const clients = await this.proxy.send('findAllClients', {}).toPromise();
    return clients;
  }

  async findOne(id: number): Promise<IReadClient> {
    const client = await this.proxy.send('findOneClient', id).toPromise();
    return client;
  }

  async update(id: number, clientDto: IUpdateClient): Promise<IReadClient> {
    const client = await this.proxy
      .send('updateClient', {  ...clientDto, id })
      .toPromise();
    return client;
  }

  async remove(id: number) {
    await this.proxy.send('removeClient', id).toPromise();
  }
}
