import { ClientsModule, Transport } from '@nestjs/microservices';
import { host, port } from '../constants';


export const registerMicroservice = (name: string) => ClientsModule.register([
  { name, transport: Transport.REDIS, options: { host, port } },
]);
