import { ICustomerClient } from "./i.customer-client";

export type ICreateCustomerClient = Omit<ICustomerClient, 'id'>;
