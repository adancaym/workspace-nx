import { IClient } from './i.client';

export type ICreateClient = Omit<IClient, 'id'>;
