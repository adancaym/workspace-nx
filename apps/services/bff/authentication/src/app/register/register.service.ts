import { Injectable } from '@nestjs/common';

import {
  ClientService,
  CustomerClientService,
  CustomerService,
  UserService
} from '@workspace-nx/proxy';

import {
  IReadClient,
  IRegisterClient,
  IRegisterUser
} from '@workspace-nx/contracts';

import {
  CreateClient,
  CreateCustomerClient,
  ReadClient,
  UpdateCustomer
} from '@workspace-nx/swagger';

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
    const caseUse = new CURegisterClient({
      clientDto: client,
      clientService: this.client,
      customerService: this.customer,
      customerClientService: this.customerClient
    });

    return caseUse.register();
  }

  async registerCustomer(customer: any) {
    return customer;
  }
}

interface ICURegisterClientArgs {
  clientDto: IRegisterClient;
  clientService: ClientService;
  customerService: CustomerService;
  customerClientService: CustomerClientService;
}

interface ICURegisterClient {
  register(client: IRegisterClient): Promise<IReadClient>;
}

class CURegisterClient implements ICURegisterClient {
  private clientDto: IRegisterClient;
  private clientService: ClientService;
  private customerService: CustomerService;
  private customerClientService: CustomerClientService;

  constructor({
    clientDto,
    clientService,
    customerService,
    customerClientService
  }: ICURegisterClientArgs) {
    this.clientDto = clientDto;
    this.clientService = clientService;
    this.customerService = customerService;
    this.customerClientService = customerClientService;
  }
  async register() {

    const clientCreatedDto = await this.clientService.create(
      new CreateClient(this.clientDto)
    );

    const customerSavedDto = await this.customerService.findOne(
      Number(this.clientDto.customer)
    );

    const customerClientDto = await this.customerClientService.create(
      new CreateCustomerClient({
        clientId: clientCreatedDto.id,
        customer: customerSavedDto
      })
    );

    customerSavedDto.clients.push(customerClientDto);

    await this.customerService.update(
      customerSavedDto.id,
      new UpdateCustomer(customerSavedDto)
    );

    return new ReadClient(clientCreatedDto);
  }
}
