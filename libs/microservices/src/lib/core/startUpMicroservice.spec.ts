import { Transport } from '@nestjs/microservices';
import { startUpMicroservice } from './startUpMicroservice';
describe('startUpMicroservice', () => {
  it('should return the configuration options for a Nest microservice that uses Redis as its transport layer', () => {
    const microservice = startUpMicroservice();
    expect(microservice.transport).toEqual(Transport.REDIS);
    expect(microservice.options).toEqual({ host: 'cache', port: 6379 });
  });
});
