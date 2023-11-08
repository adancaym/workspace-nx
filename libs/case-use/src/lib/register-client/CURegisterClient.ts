import { ClientServiceContract, CustomerClientServiceContract, CustomerServiceContract, IRegisterClient } from '@workspace-nx/contracts';
import { ICURegisterClient } from './ICURegisterClient';

import { ICURegisterClientArgs } from './ICURegisterClientArgs';

import {
  CreateClient,
  CreateCustomerClient,
  ReadClient,
  UpdateCustomer,
} from '@workspace-nx/swagger';

export class CURegisterClient implements ICURegisterClient {
  private clientDto: IRegisterClient;
  private clientService: ClientServiceContract;
  private customerService: CustomerServiceContract;
  private customerClientService: CustomerClientServiceContract

  constructor({
    clientDto,
    clientService,
    customerService,
    customerClientService,
  }: ICURegisterClientArgs) {
    this.clientDto = clientDto;
    this.clientService = clientService;
    this.customerService = customerService;
    this.customerClientService = customerClientService;
  }


  async register() {
    const { clientDto, clientService, customerService, customerClientService } =
      this;

    const clientCreatedDto = await clientService.create(
      new CreateClient(clientDto)
    );

    const customerSavedDto = await customerService.findOne(
      Number(clientDto.customer)
    );

    const customerClientDto = await customerClientService.create(
      new CreateCustomerClient({
        clientId: clientCreatedDto.id,
        customer: customerSavedDto,
      })
    );

    customerSavedDto.clients.push(customerClientDto);

    await customerService.update(
      customerSavedDto.id,
      new UpdateCustomer(customerSavedDto)
    );

    return new ReadClient(clientCreatedDto);
  }
}
