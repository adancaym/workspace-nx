import { IClient } from './client.contract';
import { IId } from '../core/id.contract';

export interface ICustomer extends IId {
  name: string;
  clients?: IClient[] | IId[];
}
export type ICreateCustomer = Omit<ICustomer, 'id'>;
export type IRegisterCustomer = ICreateCustomer;
export type IReadCustomer = ICustomer;
export type IUpdateCustomer = Partial<ICustomer>;
