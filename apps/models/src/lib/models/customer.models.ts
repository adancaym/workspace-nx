import { IClient } from "./client.models";
import { IId } from "./id.models";

export  interface ICustomer extends IId{
    name: string;
}
export type ICreateCustomer = Omit<ICustomer, 'id'>;
export type IRegisterCustomer = ICreateCustomer & {
    clients: IClient[] | IId[]
};
export type IReadCustomer = ICustomer;
export type IUpdateCustomer = Partial<ICustomer>;