import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CustomerClientEntityService } from '@workspace-nx/microservices';
import {
  ICreateCustomer,
  ICustomer,
  IUpdateCustomer,
} from '@workspace-nx/models';

@Injectable()
export class CustomerService {
  constructor(
    @CustomerClientEntityService
    private proxy: ClientProxy
  ) {}

  async create(customer: ICreateCustomer): Promise<ICustomer> {
    const customerCreated = await this.proxy
      .send('createCustomer', customer)
      .toPromise();
    return customerCreated;
  }

  async findAll(): Promise<ICustomer[]> {
    const customers = await this.proxy.send('findAllCustomer', {}).toPromise();
    return customers;
  }

  async findOne(id: number): Promise<ICustomer> {
    const customer = await this.proxy.send('findOneCustomer', id).toPromise();
    return customer;
  }

  async update(id: number, customer: IUpdateCustomer): Promise<ICustomer> {
    const customerUpdated = await this.proxy
      .send('updateCustomer', { ...customer, id })
      .toPromise();
    return customerUpdated;
  }

  async remove(id: number) {
    const customerDeleted = await this.proxy
      .send('removeCustomer', id)
      .toPromise();
    return customerDeleted;
  }
}
