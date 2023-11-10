import { IId } from '../../core';
import { ICustomer } from '../customer/i.customer';

export interface ICustomerClient extends IId {
  clientId: number;
  customer?: ICustomer | IId;
}
