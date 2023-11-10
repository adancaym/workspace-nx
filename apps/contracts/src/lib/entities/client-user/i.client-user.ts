import { IId } from '../../core';
import { IClient } from '../client';

export interface IClientUser extends IId {
  userId: number;
  client: IClient | IId;
}
