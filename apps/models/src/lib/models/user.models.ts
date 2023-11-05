import { IId } from "./id.models";

export interface IUser extends IId {
    email: string;
    password: string;
}
export type ICreateUser = Omit<IUser, 'id'>;
export type IRegisterUser = ICreateUser & { 
    client: number 
};
export type IReadUser = Omit<IUser, 'password'>;
export type IUpdateUser = Partial<IUser>;

