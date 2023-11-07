import { Transport } from '@nestjs/microservices';


export const startUpMicroservice = () => {
  return {
    transport: Transport.REDIS,
    options: { host, port },
  };
};
