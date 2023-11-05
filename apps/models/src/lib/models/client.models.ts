import { IId } from "./id.models";

export interface IClient extends IId {
    name: string;
}
export type ICreateClient = Omit<IClient, 'id'>;
export type IRegisterClient = ICreateClient & {
    customer: number
};
export type IReadClient = IClient;
export type IUpdateClient = Partial<IClient>;
