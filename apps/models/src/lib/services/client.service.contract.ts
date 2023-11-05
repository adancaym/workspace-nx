import { IClient, ICreateClient, IUpdateClient } from "../models";
import { IServiceContract } from "./service.contract";

export interface ClientServiceContract extends IServiceContract<ICreateClient, IUpdateClient, IClient>{
    create(client: ICreateClient): Promise<IClient>;
    update(id: number, client: IUpdateClient): Promise<IClient>;
    findOne(id: number): Promise<IClient>;
    findAll(): Promise<IClient[]>;
    remove(id: number): void;

}

