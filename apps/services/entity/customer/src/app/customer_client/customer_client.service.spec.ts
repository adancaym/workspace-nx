import { Test, TestingModule } from '@nestjs/testing';
import { CustomerClientService } from './customer_client.service';

describe('CustomerClientService', () => {
  let service: CustomerClientService;
  const mockService = {
    create: e => e,
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{
        provide: CustomerClientService,
        useValue: mockService,
      }],
    }).compile();
    service = module.get<CustomerClientService>(CustomerClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
