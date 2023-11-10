import { ICustomer } from './i.customer';

export type ICreateCustomer = Omit<ICustomer, 'id'>;
