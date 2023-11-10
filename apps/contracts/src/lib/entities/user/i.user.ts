import { IId } from '../../core';

export interface IUser extends IId {
  email: string;
  password: string;
}
