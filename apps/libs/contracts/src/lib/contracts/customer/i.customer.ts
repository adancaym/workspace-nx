import { IId } from '../../core/';
import { ICustomerClient } from '../customer-client';

export interface ICustomer extends IId {
  name: string;
  clients: ICustomerClient[] | IId[];
}

