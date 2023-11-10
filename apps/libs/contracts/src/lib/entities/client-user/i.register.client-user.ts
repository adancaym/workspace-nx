import { ICreateClientUser } from "./i.create.client-user";


export type IRegisterClientUser = Omit<ICreateClientUser, 'id'>;
