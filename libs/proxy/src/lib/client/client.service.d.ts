import { ClientProxy } from '@nestjs/microservices';
import { ClientServiceContract, ICreateClient, IReadClient, IUpdateClient } from '@workspace-nx/contracts';
export declare class ClientService implements ClientServiceContract {
    private proxy;
    constructor(proxy: ClientProxy);
    create(clientDto: ICreateClient): Promise<IReadClient>;
    findAll(): Promise<IReadClient[]>;
    findOne(id: number): Promise<IReadClient>;
    update(id: number, clientDto: IUpdateClient): Promise<IReadClient>;
    remove(id: number): Promise<void>;
}
