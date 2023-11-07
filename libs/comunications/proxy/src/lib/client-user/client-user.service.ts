import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateClientUser, ReadClientUser } from '@workspace-nx/documentation';
import { ClientClientEntityService } from '@workspace-nx/microservices';
import { ClientUserServiceContract } from '@workspace-nx/models';

@Injectable()
export class ClientUserService implements ClientUserServiceContract {
    constructor(
        @ClientClientEntityService
        private proxy: ClientProxy
    ) {}

    create(client: CreateClientUser): Promise<ReadClientUser> {
        return this.proxy.send('createClientUser', client).toPromise();
    }
    update(id: number, client:CreateClientUser): Promise<ReadClientUser> {
        return this.proxy.send('updateClientUser', { id, ...client }).toPromise();
    }
    findOne(id: number): Promise<ReadClientUser> {
        return this.proxy.send('findOneClientUser', id).toPromise();
    }
    findAll(): Promise<ReadClientUser[]> {
        return this.proxy.send('findAllClientUser', {}).toPromise();
    }
    remove(id: number): void {
         this.proxy.send('removeClientUser', id).toPromise();
    }
}
