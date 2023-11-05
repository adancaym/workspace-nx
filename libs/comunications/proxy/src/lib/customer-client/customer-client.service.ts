import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CustomerClientEntityService } from '@workspace-nx/microservices';
import { CreateCustomerClient, CustomerClient } from '../types';

@Injectable()
export class CustomerClientService {
  constructor(
    @CustomerClientEntityService
    private proxy: ClientProxy
  ) {}

  create(customerClient: CreateCustomerClient): Promise<CustomerClient> {
    return this.proxy.send('createCustomerClient', customerClient).toPromise();
  }

  findAll(): Promise<CustomerClient[]> {
    return this.proxy.send('findAllCustomerClient', {}).toPromise();
  }

  findOne(id: number): Promise<CustomerClient> {
    return this.proxy.send('findOneCustomerClient', id).toPromise();
  }

  update(
    id: number,
    customerClient: CreateCustomerClient
  ): Promise<CustomerClient> {
    return this.proxy
      .send('updateCustomerClient', { ...customerClient, id })
      .toPromise();
  }

  remove(id: number) {
    return this.proxy.send('removeCustomerClient', id).toPromise();
  }
}
