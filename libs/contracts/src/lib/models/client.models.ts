import { IId } from '../core/id.models';
import { IClientUser } from './client-user.models';

export interface IClient extends IId {
  name: string;
  users?: IClientUser[] | IId[];
}
export type ICreateClient = Omit<IClient, 'id'>;
export type IRegisterClient = ICreateClient & {
  customer: number;
};
export type IReadClient = IClient;
export type IUpdateClient = Partial<IClient>;
