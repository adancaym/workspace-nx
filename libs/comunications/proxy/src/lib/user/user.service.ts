import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUser, ReadUser, UpdateUser } from '@workspace-nx/documentation';
import { UserClientEntityService } from '@workspace-nx/microservices';
import { UserServiceContract } from '@workspace-nx/models';

@Injectable()
export class UserService implements UserServiceContract{

    constructor(
        @UserClientEntityService
        private proxy: ClientProxy,
    ) {}

    create(user: CreateUser): Promise<ReadUser> {
        return this.proxy.send('createUser', user).toPromise();
    }
    update(id: number, client: UpdateUser): Promise<ReadUser> {
        return this.proxy.send('updateUser', {  ...client, id }).toPromise();
    }
    findOne(id: number): Promise<ReadUser> {
        return this.proxy.send('findOneUser', id).toPromise();
    }
    findAll(): Promise<ReadUser[]> {
        return this.proxy.send('findAllUser', {}).toPromise();
    }
    remove(id: number): void {
        this.proxy.send('removeUser', id).toPromise();
    }

}
