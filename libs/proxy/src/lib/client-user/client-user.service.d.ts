import { ClientProxy } from '@nestjs/microservices';
import { CreateClientUser, ReadClientUser } from '@workspace-nx/swagger';
import { ClientUserServiceContract } from '@workspace-nx/contracts';
export declare class ClientUserService implements ClientUserServiceContract {
    private proxy;
    constructor(proxy: ClientProxy);
    create(client: CreateClientUser): Promise<ReadClientUser>;
    update(id: number, client: CreateClientUser): Promise<ReadClientUser>;
    findOne(id: number): Promise<ReadClientUser>;
    findAll(): Promise<ReadClientUser[]>;
    remove(id: number): void;
}
