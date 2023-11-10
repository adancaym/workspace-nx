import { IId } from '../../core';
import { IClientUser } from '../client-user';

export interface IClient extends IId {
  name: string;
  users?: IClientUser[] | IId[];
}
