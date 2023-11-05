import { Test, TestingModule } from '@nestjs/testing';
import { CustomerClientService } from './customer-client.service';

describe('CustomerClientService', () => {
  let service: CustomerClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerClientService],
    }).compile();

    service = module.get<CustomerClientService>(CustomerClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
