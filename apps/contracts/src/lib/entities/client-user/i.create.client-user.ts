import { IClientUser } from './i.client-user';

export type ICreateClientUser = Omit<IClientUser, 'id'>;
