import { ClientProxy } from '@nestjs/microservices';
import { ICreateCustomer, ICustomer, IUpdateCustomer } from '@workspace-nx/contracts';
export declare class CustomerService {
    private proxy;
    constructor(proxy: ClientProxy);
    create(customer: ICreateCustomer): Promise<ICustomer>;
    findAll(): Promise<ICustomer[]>;
    findOne(id: number): Promise<ICustomer>;
    update(id: number, customer: IUpdateCustomer): Promise<ICustomer>;
    remove(id: number): Promise<any>;
}
