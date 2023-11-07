import { IClient } from './client.models';
import { IId } from '../core/id.models';

export interface ICustomer extends IId {
  name: string;
  clients?: IClient[] | IId[];
}
export type ICreateCustomer = Omit<ICustomer, 'id'>;
export type IRegisterCustomer = ICreateCustomer;
export type IReadCustomer = ICustomer;
export type IUpdateCustomer = Partial<ICustomer>;
