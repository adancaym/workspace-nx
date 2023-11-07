import { ICustomer, IId } from '@workspace-nx/contracts';
import { Client } from '../client';

export class Customer implements ICustomer {
  name: string;
  clients?: Client[] | IId[] | undefined;
  id: number;

  constructor(data: ICustomer) {
    this.name = data.name;
    this.clients = data.clients;
    this.id = data.id;
  }
}
