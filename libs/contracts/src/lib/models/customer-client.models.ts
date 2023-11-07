import { IId } from '../core/id.models';
import { ICustomer } from './customer.models';

export interface ICustomerClient extends IId {
  clientId: number;
  customer?: ICustomer | IId;
}
export type ICreateCustomerClient = Omit<ICustomerClient, 'id'>;
export type IRegisterCustomerClient = ICustomerClient;
export type IReadCustomerClient = ICustomerClient;
export type IUpdateCustomerClient = Partial<ICustomerClient>;
