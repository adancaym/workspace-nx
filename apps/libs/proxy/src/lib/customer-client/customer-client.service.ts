import { firstValueFrom } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCustomerClient, CustomerClient } from '@workspace-nx/swagger';
import { CustomerClientEntityService } from '@workspace-nx/microservices';
import { CustomerClientServiceContract } from '@workspace-nx/contracts';

@Injectable()
export class CustomerClientService implements CustomerClientServiceContract{
  constructor(
    @CustomerClientEntityService
    private proxy: ClientProxy
  ) {}

  create(customerClient: CreateCustomerClient): Promise<CustomerClient> {
    return firstValueFrom(this.proxy.send('createCustomerClient', customerClient))
  }

  findAll(): Promise<CustomerClient[]> {
    return firstValueFrom(this.proxy.send('findAllCustomerClient', {}))
  }

  findOne(id: number): Promise<CustomerClient> {
    return firstValueFrom(this.proxy.send('findOneCustomerClient', id))
  }
  update(id: number, customerClient: CreateCustomerClient): Promise<CustomerClient> {
    return firstValueFrom(this.proxy.send('updateCustomerClient', { ...customerClient, id }))      
  }

  remove(id: number) {
    firstValueFrom(this.proxy.send('removeCustomerClient', id))
  }
}
