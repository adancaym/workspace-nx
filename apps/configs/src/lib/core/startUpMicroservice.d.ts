import { Transport } from '@nestjs/microservices';
export declare const startUpMicroservice: () => {
  transport: Transport;
  options: {
    host: string;
    port: number;
  };
};
