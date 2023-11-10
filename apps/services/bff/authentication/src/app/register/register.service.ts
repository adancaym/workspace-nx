import { Injectable } from '@nestjs/common';

import {
  ClientService,
  CustomerClientService,
  CustomerService,
  MailerService,
  UserService,
} from '@workspace-nx/proxy';

import { CURegisterClient } from '@workspace-nx/case-use';

import { IRegisterClient, IRegisterUser } from '@workspace-nx/contracts';
import { ReadClient } from '@workspace-nx/swagger';

@Injectable()
export class RegisterService {
  constructor(
    private user: UserService,
    private client: ClientService,
    private customer: CustomerService,
    private customerClient: CustomerClientService,
    private mail: MailerService,
  ) {}

  async registerUser(user: IRegisterUser) {
    const userCreated = await this.user.create(user);
    return userCreated;
  }

  async registerClient(client: IRegisterClient): Promise<ReadClient> {
    const caseUse = new CURegisterClient({
      clientDto: client,
      clientService: this.client,
      customerService: this.customer,
      customerClientService: this.customerClient,
    });
    return caseUse.register();
  }

  async registerCustomer(customer: any) {
    return customer;
  }
}
