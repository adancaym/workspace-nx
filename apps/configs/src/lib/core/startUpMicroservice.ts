import { Transport } from '@nestjs/microservices';
import { host, port } from '../constants';

export const startUpMicroservice = () => {
  return {
    transport: Transport.REDIS,
    options: { host, port },
  };
};
