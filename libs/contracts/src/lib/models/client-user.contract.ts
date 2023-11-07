import { IId } from '../core/id.contract';
import { IClient } from './client.contract';

export interface IClientUser extends IId {
  id: number;
  userId: number;
  client: IClient | IId;
}

export type ICreateClientUser = Omit<IClientUser, 'id'>;
export type IRegisterClientUser = ICreateClientUser;
export type IReadClientUser = IClientUser;
export type IUpdateClientUser = Partial<IClientUser>;
