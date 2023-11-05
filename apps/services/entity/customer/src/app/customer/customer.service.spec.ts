import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  let service: CustomerService;

  const mockRepository = {
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    create: (element) => element,
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{
        provide: CustomerService,
        useValue: mockRepository,
      }],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
