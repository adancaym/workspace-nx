import { Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { UserRegister } from '@workspace-nx/documentation';
import { UserClientEntityService } from '@workspace-nx/microservices';


import { ClientService, CustomerClientService, CustomerService } from '@workspace-nx/ClientsProxy';
import { IClient, IId, IRegisterClient, IRegisterUser } from '@workspace-nx/models';



@Injectable()
export class RegisterService {
    constructor(
        @UserClientEntityService 
        private user: ClientProxy,
        private client: ClientService,
        private customer: CustomerService,
        private customerClient: CustomerClientService,
    ) {}

    async registerUser(user: IRegisterUser) {
        const userCreated = await this.user.send('createUser', user).toPromise();
        return userCreated;
    }


    async registerClient(client: IRegisterClient) {
        const clientCreated = await this.client.create(client);
        const customer = await this.customer.findOne(Number(client.customer));

        const customerClient = await this.customerClient.create({
            clientId: clientCreated.id,
            customer: {
                id: customer.id,
            }
        }); 

        const customerUpdated = await this.customer.update(customer.id, { 
            name: customer.name,
            clients: [...customer.clients.map( (e: IId | IClient) => e.id) ?? [] , customerClient.id].map(
            (client) => ({ id: client}),
        )});

        return customerUpdated;
    }

    async registerCustomer(customer: any) {
        return customer;
    }
}