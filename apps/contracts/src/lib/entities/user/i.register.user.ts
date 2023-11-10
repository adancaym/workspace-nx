import { ICreateUser } from './i.create.user';

export type IRegisterUser = ICreateUser & {
  client: number;
};
