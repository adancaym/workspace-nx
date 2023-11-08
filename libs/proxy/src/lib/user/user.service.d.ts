import { ClientProxy } from '@nestjs/microservices';
import { CreateUser, ReadUser, UpdateUser } from '@workspace-nx/swagger';
import { UserServiceContract } from '@workspace-nx/contracts';
export declare class UserService implements UserServiceContract {
    private proxy;
    constructor(proxy: ClientProxy);
    create(user: CreateUser): Promise<ReadUser>;
    update(id: number, client: UpdateUser): Promise<ReadUser>;
    findOne(id: number): Promise<ReadUser>;
    findAll(): Promise<ReadUser[]>;
    remove(id: number): void;
}
