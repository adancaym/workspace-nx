import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CustomerClientEntityService } from '@workspace-nx/configs';
import {
  CustomerServiceContract,
  ICreateCustomer,
  ICustomer,
  IUpdateCustomer,
} from '@workspace-nx/contracts';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CustomerService implements CustomerServiceContract {
  constructor(
    @CustomerClientEntityService
    private proxy: ClientProxy
  ) {}

  async create(customer: ICreateCustomer): Promise<ICustomer> {
    return firstValueFrom(this.proxy.send('createCustomer', customer));
  }

  async findAll(): Promise<ICustomer[]> {
    return firstValueFrom(this.proxy.send('findAllCustomer', {}));
  }

  async findOne(id: number): Promise<ICustomer> {
    return firstValueFrom(this.proxy.send('findOneCustomer', id));
  }

  async update(id: number, customer: IUpdateCustomer): Promise<ICustomer> {
    return firstValueFrom(
      this.proxy.send('updateCustomer', { ...customer, id })
    );
  }

  async remove(id: number) {
    firstValueFrom(this.proxy.send('removeCustomer', id));
  }
}
