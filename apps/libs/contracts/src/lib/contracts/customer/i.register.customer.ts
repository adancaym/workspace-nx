import { ICreateCustomer } from './i.create.customer';

export type IRegisterCustomer = Omit<ICreateCustomer, 'id'>;
