import { Transport } from '@nestjs/microservices';

const host = 'cache';
const port = 6379;

export const startUpMicroservice = () => {
  return {
    transport: Transport.REDIS,
    options: { host, port },
  };
}
