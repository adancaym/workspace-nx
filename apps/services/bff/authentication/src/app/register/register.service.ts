import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserClientEntityService } from '@workspace-nx/microservices';

import {
  ClientService,
  CustomerClientService,
  CustomerService,
  UserService,
} from '@workspace-nx/proxy';

import {
  IClient,
  IId,
  IRegisterClient,
  IRegisterUser,
} from '@workspace-nx/contracts';
import { Client } from '@workspace-nx/swagger';

@Injectable()
export class RegisterService {
  constructor(
    private user: UserService,
    private client: ClientService,
    private customer: CustomerService,
    private customerClient: CustomerClientService
  ) {}

  async registerUser(user: IRegisterUser) {
    const userCreated = await this.user.create(user);
    return userCreated;
  }

  async registerClient(client: IRegisterClient) {
    const clientCreated = await this.client.create(client);
    const customer = await this.customer.findOne(Number(client.customer));

    const customerClient = await this.customerClient.create({
      clientId: clientCreated.id,
      customer: {
        id: customer.id,
      },
    });

    await this.customer.update(customer.id, {
      name: customer.name,
      clients: [
        ...(customer.clients.map((e: IId | IClient) => e.id) ?? []),
        customerClient.id,
      ].map((client) => ({ id: client })),
    });

    return new Client(clientCreated);
  }

  async registerCustomer(customer: any) {
    return customer;
  }
}
