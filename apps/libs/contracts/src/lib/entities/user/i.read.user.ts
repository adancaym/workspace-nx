import { IUser } from "./i.user";

export type IReadUser = Omit<IUser, 'password'>;
