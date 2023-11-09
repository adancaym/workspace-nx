import { IId } from '../core/id.contract';
import { ICustomerClient } from './customer-client.contract';

export interface ICustomer extends IId {
  name: string;
  clients: ICustomerClient[] | IId[];
}
export type ICreateCustomer = Omit<ICustomer, 'id'>;
export type IRegisterCustomer = Omit<ICreateCustomer, 'id'>;
export type IReadCustomer = ICustomer;
export type IUpdateCustomer = Partial<ICustomer>;
