import { Test, TestingModule } from '@nestjs/testing';
import { CustomerClientService } from './customer-client.service';
import { ClientProxy } from '@nestjs/microservices';
import { CustomerEntityService } from '@workspace-nx/configs';

describe('CustomerClientService', () => {
  let service: CustomerClientService;

  const mockClientProxy = {
    send: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CustomerEntityService],
      providers: [
        CustomerClientService,
        {
          provide: ClientProxy,
          useValue: mockClientProxy,
        },
      ],
    }).compile();

    service = module.get<CustomerClientService>(CustomerClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
