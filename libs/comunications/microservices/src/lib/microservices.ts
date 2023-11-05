import { ClientsModule, Transport } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';

const host = 'cache';
const port = 6379;


const UserEntityServiceName     = 'UserEntityService';
const ClientEntityServiceName   = 'ClientEntityService';
const CustomerEntityServiceName = 'CustomerEntityService';


export const startUpMicroservice = () => {
  return {
    transport: Transport.REDIS,
    options: { host, port },
  };
}

export const registerMicroservice = (name: string) => 
  ClientsModule.register([
    { name, transport: Transport.REDIS, options: { host, port } },
  ]);



export const UserEntityService     = registerMicroservice(UserEntityServiceName);
export const ClientEntityService   = registerMicroservice(ClientEntityServiceName);
export const CustomerEntityService = registerMicroservice(CustomerEntityServiceName);

export const UserClientEntityService = Inject(UserEntityServiceName);
export const ClientClientEntityService = Inject(ClientEntityServiceName);
export const CustomerClientEntityService = Inject(CustomerEntityServiceName);
