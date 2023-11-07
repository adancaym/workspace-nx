import { ClientsModule, Transport } from '@nestjs/microservices';


export const registerMicroservice = (name: string) => ClientsModule.register([
  { name, transport: Transport.REDIS, options: { host, port } },
]);
