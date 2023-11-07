import { ICreateUser, IReadUser, IUpdateUser, IUser } from "../models";
import { IServiceContract } from "../core/service.contract";

export interface UserServiceContract extends IServiceContract<ICreateUser, IUpdateUser, IReadUser>{
    create(client: ICreateUser): Promise<IReadUser>;
    update(id: number, client: IUpdateUser): Promise<IReadUser>;
    findOne(id: number): Promise<IReadUser>;
    findAll(): Promise<IReadUser[]>;
    remove(id: number): void;
}

