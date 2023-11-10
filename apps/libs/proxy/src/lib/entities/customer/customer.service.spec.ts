import { Test, TestingModule } from '@nestjs/testing';
import { CustomerService } from './customer.service';
import { ClientProxy } from '@nestjs/microservices';
import { CustomerEntityService } from '@workspace-nx/microservices';

describe('CustomerService', () => {
  let service: CustomerService;

  const mockClientProxy = {
    send: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CustomerEntityService],
      providers: [
        CustomerService,
        {
          provide: ClientProxy,
          useValue: mockClientProxy,
        },
      ],
    }).compile();

    service = module.get<CustomerService>(CustomerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
