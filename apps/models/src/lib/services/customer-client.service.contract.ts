import { ICreateCustomerClient, IReadCustomerClient, IUpdateCustomerClient } from "../models";
import { IServiceContract } from "../core/service.contract";

export interface CustomerClientServiceContract extends IServiceContract<ICreateCustomerClient, IUpdateCustomerClient, IReadCustomerClient>{
    create(client: ICreateCustomerClient): Promise<IReadCustomerClient>;
    update(id: number, client: IUpdateCustomerClient): Promise<IReadCustomerClient>;
    findOne(id: number): Promise<IReadCustomerClient>;
    findAll(): Promise<IReadCustomerClient[]>;
    remove(id: number): void;

}

