import { ClientProxy } from '@nestjs/microservices';
import { CreateCustomerClient, CustomerClient } from '@workspace-nx/swagger';
export declare class CustomerClientService {
    private proxy;
    constructor(proxy: ClientProxy);
    create(customerClient: CreateCustomerClient): Promise<CustomerClient>;
    findAll(): Promise<CustomerClient[]>;
    findOne(id: number): Promise<CustomerClient>;
    update(id: number, customerClient: CreateCustomerClient): Promise<CustomerClient>;
    remove(id: number): Promise<any>;
}
