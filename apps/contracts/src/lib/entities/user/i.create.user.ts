import { IUser } from './i.user';

export type ICreateUser = Omit<IUser, 'id'>;
