import { ICustomer, IId } from '@workspace-nx/contracts';
import { CustomerClient } from '../customerClient';

export class Customer implements ICustomer {
  name: string;
  clients: CustomerClient[] | IId[];
  id: number;

  constructor(data: ICustomer) {
    this.name = data.name;
    this.clients = data.clients;
    this.id = data.id;
  }
}
